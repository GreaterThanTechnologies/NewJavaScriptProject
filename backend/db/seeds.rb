# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

partner_a = Partner.create(fname: "Rodney", lname: "Peak", title: "Co-Founder", level: "1")
partner_b = Partner.create(fname: "James", lname: "Hyatt", title: "Co-Founder", level: "1")
partner_c = Partner.create(fname: "Dustin", lname: "Ball", title: "Partner Level 1", level: "3")
partner_d = Partner.create(fname: "Bill", lname: "Julian", title: "CFO", level: "2")

responsibility_a = Responsibility.create(partner_id: "0", task: "Produce Content")
responsibility_b = Responsibility.create(partner_id: "1", task: "Create Marketing Plan")
responsibility_c = Responsibility.create(partner_id: "2", task: "Aquire Paying Clients")
responsibility_d = Responsibility.create(partner_id: "3", task: "Oopen Bank Account")