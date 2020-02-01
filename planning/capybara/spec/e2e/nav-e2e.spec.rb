require 'capybara'
require 'capybara/dsl'
# require 'capybara/selenium'
# require 'capybara/angular'
require 'capybara/rspec'
require 'capybara/rspec/matcher_proxies'
require 'rspec/expectations'
require 'rails_helper'
require 'percy'


# $:.each do |d|
#     p d 
# end 

# ENV.each {|k,v| puts "#{k}: #{v}"}  

module TestMod

  include Capybara::DSL
  Capybara.default_driver = :selenium 
  Capybara.current_driver = :selenium
  Capybara.app_host = 'http://localhost:4200'

  # Capybara.configure do |config|
  #   config.default_max_wait_time = 20
  # end
  
  def TestMod.startTest  
    @javascript
    # RSpec.feature "navigation stuff" do
    #   scenario "Go to home page" do
    #     visit '/'
    #     expect(page).to have_selector 'app-navigation[ng-reflect-navigation-template-variable=navigationComponentObject0]';
    #     expect(page).to have_selector 'app-overlay[ng-reflect-overlay-template-variable=overlayComponentObject4]';
    #     expect(page).to have_selector 'app-words[ng-reflect-words-template-variable=wordsComponentObject1]';
    #     expect(page).to have_selector 'app-words[ng-reflect-words-template-variable=wordsComponentObject0]';
    #     expect(page).to have_selector 'app-words[ng-reflect-words-template-variable=wordsComponentObject2]';
    #     expect(page).to have_selector 'app-footer[ng-reflect-footer-template-variable=footerComponentObject0]';
    #   end
    #   scenario "head to about page" do
    #     visit '/'
    #     # puts page.has_selector? '#n_a_v_i_g_a_t_i_o_n_aboutLink'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_aboutLink" 
    #     elem.select_option
    #     expect(page).to have_selector 'app-navigation[ng-reflect-navigation-template-variable=navigationComponentObject0]';
    #     expect(page).to have_selector 'app-overlay[ng-reflect-overlay-template-variable=overlayComponentObject3]';
    #     expect(page).to have_selector 'app-words[ng-reflect-words-template-variable=wordsComponentObject5]';
    #     expect(page).to have_selector 'app-footer[ng-reflect-footer-template-variable=footerComponentObject0]';
    #     #sleep 9000
    #   end
    #   scenario "head to services page" do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_servicesLink" 
    #     elem.select_option
    #     expect(page).to have_selector 'app-navigation[ng-reflect-navigation-template-variable=navigationComponentObject0]';
    #     expect(page).to have_selector 'app-overlay[ng-reflect-overlay-template-variable=overlayComponentObject0]';
    #     expect(page).to have_selector 'app-words[ng-reflect-words-template-variable=wordsComponentObject3]';
    #     expect(page).to have_selector 'app-words[ng-reflect-words-template-variable=wordsComponentObject4]';
    #     expect(page).to have_selector 'app-footer[ng-reflect-footer-template-variable=footerComponentObject0]';
    #   end    
    #   scenario "head to projects page" do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_projectsLink" 
    #     elem.select_option
    #     expect(page).to have_selector 'app-navigation[ng-reflect-navigation-template-variable=navigationComponentObject0]';
    #     expect(page).to have_selector 'app-overlay[ng-reflect-overlay-template-variable=overlayComponentObject1]';
    #     expect(page).to have_selector 'app-words[ng-reflect-words-template-variable=wordsComponentObject6]';
    #     expect(page).to have_selector 'app-words[ng-reflect-words-template-variable=wordsComponentObject7]';
    #     expect(page).to have_selector 'app-words[ng-reflect-words-template-variable=wordsComponentObject8]';
    #     expect(page).to have_selector 'app-footer[ng-reflect-footer-template-variable=footerComponentObject0]';
    #   end     
    #   scenario "head to blog page" do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_blogLink" 
    #     elem.select_option
    #     expect(page).to have_selector 'app-navigation[ng-reflect-navigation-template-variable=navigationComponentObject0]';
    #     expect(page).to have_selector 'app-overlay[ng-reflect-overlay-template-variable=overlayComponentObject5]';
    #     expect(page).to have_selector 'app-blog[ng-reflect-blog-t-v=blogCO0]';
    #     expect(page).to have_selector 'app-footer[ng-reflect-footer-template-variable=footerComponentObject0]';
    #   end  
    #   scenario "head to contact page" do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_contactLink" 
    #     elem.select_option
    #     expect(page).to have_selector 'app-navigation[ng-reflect-navigation-template-variable=navigationComponentObject0]';
    #     expect(page).to have_selector 'app-overlay[ng-reflect-overlay-template-variable=overlayComponentObject2]';
    #     expect(page).to have_selector 'app-words[ng-reflect-words-template-variable=wordsComponentObject9]';
    #     expect(page).to have_selector 'app-footer[ng-reflect-footer-template-variable=footerComponentObject0]';
    #   end                      
    # end

    # RSpec.feature "user interaction" do
    #   describe "home page" do
    #     it 'should have the learn more button fire on hover ' do 
    #       visit '/'
    #       puts page
    #     end
    #   end
    #   # scenario "head to about page" do
    #   #   visit '/'
    #   #   # puts page.has_selector? '#n_a_v_i_g_a_t_i_o_n_aboutLink'
    #   #   elem = first "#n_a_v_i_g_a_t_i_o_n_aboutLink" 
    #   #   elem.select_option
    #   #   #sleep 9000
    #   # end
    #   # scenario "head to services page" do
    #   #   visit '/'
    #   #   elem = first "#n_a_v_i_g_a_t_i_o_n_servicesLink" 
    #   #   elem.select_option
    #   # end    
    #   # scenario "head to projects page" do
    #   #   visit '/'
    #   #   elem = first "#n_a_v_i_g_a_t_i_o_n_projectsLink" 
    #   #   elem.select_option
    #   # end     
    #   # scenario "head to blog page" do
    #   #   visit '/'
    #   #   elem = first "#n_a_v_i_g_a_t_i_o_n_blogLink" 
    #   #   elem.select_option
    #   # end  
    #   # scenario "head to contact page" do
    #   #   visit '/'
    #   #   elem = first "#n_a_v_i_g_a_t_i_o_n_contactLink" 
    #   #   elem.select_option
    #   # end                      
    # end

    # RSpec.feature "visual regression debugging" do
    #   scenario "take a snapshot of the projects page", :js => true do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_blogLink" 
    #     elem.select_option
    #     # Percy.snapshot page, { :name => 'windsor projects page', :widths=> [668, 1187, 1800] }
    #     page.current_window.resize_to 668, 800
    #     sleep 30       
    #     Percy.snapshot page, { :name => 'windsor projects page phone', :widths => [668] }
    #   end
    # end

    RSpec.feature "visual regression" do
      my_widths = [ 668 ,1187 ,1800 ]   
      scenario "take a snapshot of the homepage", :js => true do
        visit '/'
        # Percy.snapshot page, { :name => 'windsor homepage', :widths=> my_widths }
        page.current_window.resize_to 668, 800
        Percy.snapshot page, { :name => 'windsor homepage phone', :widths => [668] }
        
        page.current_window.resize_to 1187, 800
        Percy.snapshot page, { :name => 'windsor homepage laptop', :widths => [1187] }

        page.current_window.resize_to 1800, 800
        Percy.snapshot page, { :name => 'windsor homepage big desktop', :widths => [1800] }            
      end
      scenario "take a snapshot of the about page",  :js => true do
        visit '/'
        elem = first "#n_a_v_i_g_a_t_i_o_n_aboutLink" 
        elem.select_option        
        # Percy.snapshot page, { :name => 'windsor about page', :widths=> [668, 1187, 1800] }
        page.current_window.resize_to 668, 800
        Percy.snapshot page, { :name => 'windsor about page phone', :widths => [668] }
        
        page.current_window.resize_to 1187, 800
        Percy.snapshot page, { :name => 'windsor about page laptop', :widths => [1187] }

        page.current_window.resize_to 1800, 800
        Percy.snapshot page, { :name => 'windsor about page big desktop', :widths => [1800] }   
      end   
      scenario "take a snapshot of the services page", :js => true do
        visit '/'
        elem = first "#n_a_v_i_g_a_t_i_o_n_servicesLink" 
        elem.select_option        
        # Percy.snapshot page, { :name => 'windsor services page', :widths=> [668, 1187, 1800] }
        page.current_window.resize_to 668, 800
        Percy.snapshot page, { :name => 'windsor services page phone', :widths => [668] }
        
        page.current_window.resize_to 1187, 800
        Percy.snapshot page, { :name => 'windsor services page laptop', :widths => [1187] }

        page.current_window.resize_to 1800, 800
        Percy.snapshot page, { :name => 'windsor services page big desktop', :widths => [1800] }         
      end
      scenario "take a snapshot of the projects page", :js => true do
        visit '/'
        elem = first "#n_a_v_i_g_a_t_i_o_n_projectsLink" 
        elem.select_option
        # Percy.snapshot page, { :name => 'windsor projects page', :widths=> [668, 1187, 1800] }
        page.current_window.resize_to 668, 800
        sleep 30
        Percy.snapshot page, { :name => 'windsor projects page phone', :widths => [668] }
        
        page.current_window.resize_to 1187, 800
        Percy.snapshot page, { :name => 'windsor projects page laptop', :widths => [1187] }

        page.current_window.resize_to 1800, 800
        Percy.snapshot page, { :name => 'windsor projects page big desktop', :widths => [1800] }       
      end
      scenario "take a snapshot of the blog page", :js => true do
        visit '/'
        elem = first "#n_a_v_i_g_a_t_i_o_n_blogLink" 
        elem.select_option
        # Percy.snapshot page, { :name => 'windsor blog page', :widths=> [668, 1187, 1800] }
        page.current_window.resize_to 668, 800
        sleep 5
        Percy.snapshot page, { :name => 'windsor blog page phone', :widths => [668] }
        
        page.current_window.resize_to 1187, 800
        sleep 5
        Percy.snapshot page, { :name => 'windsor blog page laptop', :widths => [1187] }

        page.current_window.resize_to 1800, 800
        sleep 5
        Percy.snapshot page, { :name => 'windsor blog page big desktop', :widths => [1800] }         
      end
      scenario "take a snapshot of the contact page", :js => true do
        visit '/'
        elem = first "#n_a_v_i_g_a_t_i_o_n_contactLink" 
        elem.select_option
        # Percy.snapshot page, { :name => 'windsor contact page', :widths=> [668, 1187, 1800] }
        page.current_window.resize_to 668, 800
        sleep 5
        Percy.snapshot page, { :name => 'windsor contact page phone', :widths => [668] }
        
        page.current_window.resize_to 1187, 800
        Percy.snapshot page, { :name => 'windsor contact page laptop', :widths => [1187] }

        page.current_window.resize_to 1800, 800
        Percy.snapshot page, { :name => 'windsor contact page big desktop', :widths => [1800] }      
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

  end


end
TestMod.startTest



=begin
  for navigation you must head to all the links
=end