class Survey < ApplicationRecord
    validates :userId, presence: true;
    validates :email, presence: true;
    validates :productsUsedDaily, presence: true;
    validates :favoriteColor, presence: true;
    validates :favoriteTexture, presence: true;
    validates :mealsCookedWeekly, presence: true;
    validates :materialChoice, presence: true;
    validates :roundedOrSquared, presence: true;
    validates :minimalistOrMaximalist, presence: true;
    validates :brightOrMuteTones, presence: true;
end

def user_params
    params.permit(:userId, 
        :email, 
        :productsUsedDaily,
        :favoriteColor,
        :favoriteTexture,
        :mealsCookedWeekly,
        :materialChoice,
        :roundedOrSquared,
        :minimalistOrMaximalist,
        :brightOrMuteTones)
  end
