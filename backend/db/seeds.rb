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
partner_d = Partner.create(fname: "Ebony", lname: "DeBois", title: "Outgoing CFO", level: "2")
partner_e = Partner.create(fname: "Anterio", lname: "Jackson", title: "Partner", level: "3")
partner_f = Partner.create(fname: "Deborah", lname: "Williams", title: "Partner", level: "3")
partner_g = Partner.create(fname: "Kait", lname: "Lemus", title: "Partner", level: "3")
partner_h = Partner.create(fname: "Jason", lname: "Moreta", title: "Partner", level: "3")
partner_i = Partner.create(fname: "Brent", lname: "Bradford", title: "Partner", level: "3")
partner_j = Partner.create(fname: "Bill", lname: "Julian", title: "Incoming CFO", level: "2")


taks_a = Task.create(partner_id: "4", todo: "Produce Content")
taks_b = Task.create(partner_id: "1", todo: "Hope Mike passes you James!")
taks_c = Task.create(partner_id: "2", todo: "Aquire Paying Clients")
taks_d = Task.create(partner_id: "3", todo: "Open Bank Account")
taks_e = Task.create(partner_id: "4", todo: "Finalize Trust Formations")
taks_f = Task.create(partner_id: "7", todo: "Put Together Code of Coduct Agreement")
taks_g = Task.create(partner_id: "6", todo: "Terms & Conditions")
taks_h = Task.create(partner_id: "9", todo: "Provacy Policy")
taks_i = Task.create(partner_id: "8", todo: "Research Immediate Competition")
taks_j = Task.create(partner_id: "5", todo: "Enjoy your vacation")
taks_k = Task.create(partner_id: "10", todo: "Create incoming message from new CFO")
