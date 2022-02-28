class User < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true
    validates :zipcode, presence: true
    validates :age, presence: true
end
