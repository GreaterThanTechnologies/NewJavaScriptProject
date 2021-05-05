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
partner_d = Partner.create(fname: "Ebony", lname: "DeBois", title: "CFO", level: "2")
partner_e = Partner.create(fname: "Anterio", lname: "Jackson", title: "Partner", level: "3")
partner_f = Partner.create(fname: "Deborah", lname: "Williams", title: "Partner", level: "3")
partner_g = Partner.create(fname: "Kait", lname: "Lemus", title: "Partner", level: "3")
partner_h = Partner.create(fname: "Jason", lname: "Moreta", title: "Partner", level: "3")
partner_i = Partner.create(fname: "Brent", lname: "Bradford", title: "Partner", level: "3")

responsibility_a = Responsibility.create(partner_id: "0", task: "Produce Content")
responsibility_b = Responsibility.create(partner_id: "1", task: "Create Marketing Plan")
responsibility_c = Responsibility.create(partner_id: "2", task: "Aquire Paying Clients")
responsibility_d = Responsibility.create(partner_id: "3", task: "Open Bank Account")
responsibility_e = Responsibility.create(partner_id: "0", task: "Finalize Trust Formations")
responsibility_f = Responsibility.create(partner_id: "0", task: "Put Together Code of Coduct Agreement")
responsibility_g = Responsibility.create(partner_id: "0", task: "Terms & Conditions")
responsibility_h = Responsibility.create(partner_id: "0", task: "Provacy Policy")
responsibility_i = Responsibility.create(partner_id: "0", task: "Research Immediate Competition")
