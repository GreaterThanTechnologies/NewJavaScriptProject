# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

partner_a = Partner.create(name: "Rodney Peak", title: "Co-Founder")
partner_b = Partner.create(name: "James Hyatt", title: "Co-Founder")
partner_c = Partner.create(name: "Dustin Ball", title: "Partner Level 1")
partner_d = Partner.create(name: "Bill Julian", title: "CFO")

responsibility_a = Responsibility.create(partner_id: "0", task: "Produce Content")
responsibility_b = Responsibility.create(partner_id: "1", task: "Create Marketing Plan")
responsibility_c = Responsibility.create(partner_id: "2", task: "Aquire Paying Clients")
responsibility_d = Responsibility.create(partner_id: "3", task: "Oopen Bank Account")