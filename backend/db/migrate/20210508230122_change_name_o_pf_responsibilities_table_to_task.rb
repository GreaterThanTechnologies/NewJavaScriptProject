class ChangeNameOPfResponsibilitiesTableToTask < ActiveRecord::Migration[6.1]
  def change
    rename_table :responsibilities, :tasks
  end
end
