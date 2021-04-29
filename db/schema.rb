ActiveRecord::Schema.define(version: 2021_04_29_194139) do

  create_table "partners", force: :cascade do |t|
    t.string "name"
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "responsibilities", force: :cascade do |t|
    t.integer "partner_id"
    t.string "task"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
