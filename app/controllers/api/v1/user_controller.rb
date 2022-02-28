class Api::V1::UserController < ApplicationController
  def index
  end

  def create
    user = User.create!(user_params)
    if user
      render json: user
    else
      render json: user.errors
    end
  end

  def show
    if user
      render json: user
    else
      render json: user.errors
    end
  end

  def destroy
  end

  private

  def user_params
    params.permit(:name, :email, :zipcode, :age)
  end
end
