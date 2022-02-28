class Api::V1::SurveyController < ApplicationController
  def index
    
  end

  def create
    survey = Survey.create!(user_params)
    if survey
      render json: survey
    else
      render json: survey.errors
    end
  end

  def show
  end

  def destroy
  end
end
