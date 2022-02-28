class CreateSurveys < ActiveRecord::Migration[7.0]
  def change
    create_table :surveys do |t|
      t.string :name
      t.string :useremail
      t.date :timeCompleted

      t.timestamps
    end
  end
end
