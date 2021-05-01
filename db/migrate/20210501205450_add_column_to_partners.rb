class AddColumnToPartners < ActiveRecord::Migration[6.1]
  def change
    add_column :partners, :level, :string
  end
end
