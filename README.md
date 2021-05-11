# Joint Venture Partner Manager App
by James Hyatt
**********
## How to set up the App
0. This app works best with Ruby 2.6.1 & Rails 6.1.3.1.
1. Visit my [Github repository]
(https://github.com/GreaterThanTechnologies/NewJavaScriptProject) 
and clone the code to your local directory:
 `git clone https://github.com/GreaterThanTechnologies/NewJavaScriptProjectt`.
2. Enter into the *newjavascriptproject* folder: `cd backend`.
3. Execute `bundle install` and run `rails s` in terminal.
4. In a new terminal, move to the directory, *newjavascriptproject* folder: `cd 
frontend`.
5. Then, open the `index.html` in your browser (*please avoid using live server*).
## How To Use the App
The only thing this app is used for is for demonstrational purposes only. 
There is no signup, no 
logging in. The application is fed through a seed file. 
## Functions That Operate the Application
0. One can add tasks to a specific JV Partner using a form
1. One can view the associated tasks from a particular JV Partner by clicking
their name in tha table
2. One can delete a partner within the table
## Data Structure
### partners
```ruby
  t.string :fname
  t.string :lname
  t.integer :level
  t.string :title
  ...
```
### tasks
``` ruby
  t.string :todo
  t.integer :partner_id
```
## Model Associations
### Partner
``` ruby
  has_many :tasks
```
### Task
``` ruby
  belongs_to :partner
```
## Contributing
Bug reports and pull requests are welcome on GitHub at 
https://github.com/GreaterThanTechnologies/NewJavaScriptProject/tree/refactor. 
This project is intended to be a safe, welcoming space for collaboration, and 
contributors are expected to adhere to the [Contributor Covenant]
(contributor-covenant.org) code of conduct.

## Contributors

* James Hyatt | greater_than_technologies.inc

## License & Copyright

© James Hyatt

The app is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).



