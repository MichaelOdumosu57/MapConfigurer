require 'capybara'
require 'capybara/dsl'
# require 'capybara/selenium'
# require 'capybara/angular'
require 'capybara/rspec'
require 'capybara/rspec/matcher_proxies'
require 'rspec/expectations'
require 'rails_helper'

# $:.each do |d|
#     p d 
# end 



module TestMod

  include Capybara::DSL
  Capybara.default_driver = :selenium 
  Capybara.current_driver = :selenium
  Capybara.app_host = 'http://localhost:4200'

  # Capybara.configure do |config|
  #   config.default_max_wait_time = 20
  # end
  
  def TestMod.startTest  
    # @javascript
    RSpec.feature "navigation stuff" do
      scenario "Go to home page" do
        visit '/'
      end
      scenario "head to about page" do
        # debugger
        visit '/'
        puts page.has_selector? '#n_a_v_i_g_a_t_i_o_n_aboutLink'
        puts 'im sending to stdout correctly'
        # click_link %{'About'},  {:wait=>5}  
        elem = first "#n_a_v_i_g_a_t_i_o_n_aboutLink" 
        elem.select_option
        # elem click_on
        # sleep 9000
      end
    end
=begin  
    describe "Create place scenario" do
      context "Go to home page" do
        it "opens homepage" do
          visit('/')
        end
      end
      context "head to about page" do
        it "clicks a link to head to the about page" do
          click_link('n_a_v_i_g_a_t_i_o_n_aboutLink')
        end
      end
    end    
=end
=begin 
    When /I sign in/ do
      visit('/')
    end
=end
  end


end
TestMod.startTest

# describe "Create place scenario" do
#   context "Go to home page" do
#     it "opens homepage" do
#       visit('/')
#     end
#   end
#   context "head to about page" do
#     it "clicks a link to head to the about page" do
#       click_link('n_a_v_i_g_a_t_i_o_n_aboutLink')
#     end
#   end
# end

=begin
  for navigation you must head to all the links
=end