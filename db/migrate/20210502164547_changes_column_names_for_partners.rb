class ChangesColumnNamesForPartners < ActiveRecord::Migration[6.1]
  def change
    rename_column :partners, :name, :fname
    add_column :partners, :lname, :string
  end
end
