from fastapi import APIRouter, Header, HTTPException, Depends, Response
from models.user.userCollectionModel import UserCollectionModel
from models.user.userModel import UserModel
from models.user.userEngagementsModel import UserEngagementsModel
from models.user.userOpenReturnModel import UserOpenReturnModel
from models.user.userLoginModel import UserLoginModel

import jwt

from backend.five_backend.api.utils.jwt_utils import create_access_token, verify_access_token, JWToken

from dbOperations import users as userDB

from fastapi.security import OAuth2PasswordBearer
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")
router = APIRouter()

@router.get(
    "/{user_id}",
    response_model=UserOpenReturnModel,
     status_code=200,
     response_model_by_alias=False,
     summary="Get an existing user by id"
)
async def getUserById(user_id : str):
    user = await userDB.getUserById(user_id)
    return user

@router.post(
    "/",
    response_description="List of all users",
    response_model=UserCollectionModel,
    response_model_by_alias=False,
    summary= "Get a list of all existing users")
async def readAllUsers(token: str = Depends(oauth2_scheme)):
    try:
        payload = verify_access_token(token)
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Token is invalid")
    except Exception as e:
        raise HTTPException(status_code=401, detail=e)

    is_admin = payload.get("is_admin", False)

    if not is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")

    print("User is admin")

    return UserCollectionModel(
        users = await userDB.readAllUsers()
    )

@router.post(
    "/superuser",
    response_description="Returns superuser token",
    response_model=JWToken,
    response_model_by_alias=False,
    summary= "Get a superuser token")
async def superuserLogin():
    data = {"is_superuser": True}
    token = create_access_token(data)
    return JWToken(token=token)

@router.post(
        "/register",
             response_description="User has been created",
             response_model=UserEngagementsModel,
             status_code=201,
             response_model_by_alias=False,
             summary="Create a new user"
             )
async def createNewUser(user : UserModel):
    discreteUser = await userDB.createNewUser(user)
    return discreteUser

@router.post(
        "/login",
             response_description="User has been logged in",
             response_model=UserOpenReturnModel,
             status_code=200,
             response_model_by_alias=False,
             summary="Login an existing user"
             )
async def loginUser(user : UserLoginModel, response: Response):
    discreteUser, jwt = await userDB.loginUser(user)
    response.headers["Authorization"] = jwt
    return discreteUser
