require 'capybara'
require 'capybara/dsl'
# require 'capybara/selenium'
# require 'capybara/angular'
require 'capybara/rspec'
require 'capybara/rspec/matcher_proxies'
require 'rspec/expectations'
require 'rails_helper'
require 'percy'
require 'selenium/webdriver'

 
# monkey patch to avoid reset sessions
class Capybara::Selenium::Driver < Capybara::Driver::Base
  def reset!
    if @browser
      @browser.navigate.to('about:blank')
    end
  end
end


 

 
# Capybara.default_driver = :lambdatest
# Capybara.run_server = true

# $:.each do |d|
#     p d 
# end 

# ENV.each {|k,v| puts "#{k}: #{v}"}  

module TestMod

  include Capybara::DSL
  Capybara.default_driver = :selenium 
  # Capybara.current_driver = :selenium
  Capybara.app_host = 'http://localhost:4200'
  # Capybara.app_host = "https://www.sortforyou.com"

  # Capybara.configure do |config|
  #   config.default_max_wait_time = 20
  # end
  
  def TestMod.startTest  
    @javascript
    # RSpec.feature "navigation stuff" do
    #   scenario "Go to home page" do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_homeLink" 
    #     elem.select_option        
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

    RSpec.feature "user interaction" do
      describe "home page" do

        before(:each) do   
          config = Hash.new 
          config[:user] = ENV['LT_USERNAME']  
          config[:key] = ENV['LT_APIKEY']     
          p config[:user].class
          p config[:key].class                 
          caps = {                       
              :browserName => "chrome",         
              :version => "76.0",         
              :platform =>  "win10",
              :name =>  "RSpec Sample Test",
              :build =>  "RSpec Selenium Sample",      
              :network =>  true,
              :visual =>  true,
              :video =>  true,
              :console =>  true,
              :tunnel =>true
          }  
          # puts caps
          # puts config
          puts "https://#{config[:user]}:#{config[:key]}@#{config[:server]}/wd/hub"
          @driver = Selenium::WebDriver.for(:remote,
              :url => "https://#{config[:user]}:#{config[:key]}@hub.lambdatest.com/wd/hub",
              :desired_capabilities => caps)
           
          @driver.manage.window.maximize
           
          @driver.get('http://localhost:4200')
          sleep(3)       
        end
         
        after(:each) do  
          @driver.quit   
        end
                
        it 'should have the learn more button fire on hover ' do 
          visit '/'
          elem = first "#n_a_v_i_g_a_t_i_o_n_homeLink" 
          elem.select_option
          opacity = page.evaluate_script %{window.Modernizr.opacity}
          # puts opacity.class
          /comparing strings/ 
          unless opacity then   
            learn_more = Hash.new 
            learn_more[:element] = first %{#o_v_e_r_l_a_y_AboutLearnButton}
            learn_more[:background_color] = learn_more[:element].style   %{background-color}
            learn_more[:background_color_pre] = learn_more[:background_color][%{background-color}]
            # puts learn_more
            # learn_more[:element].hover  
            learn_more[:background_color] = learn_more[:element].style   %{background-color}
            learn_more[:background_color_post] = learn_more[:background_color][%{background-color}]    
            # puts learn_more
            puts learn_more[:background_color_post]        
            puts learn_more[:background_color_pre]
            expect(learn_more[:background_color_post]).not_to equal learn_more[:background_color_pre]
          end  
          /element.matches style some times this test fails mabye because of timing/
          if opacity then   
            learn_more = Hash.new 
            learn_more[:element] = first %{#o_v_e_r_l_a_y_AboutLearnButton}
            learn_more[:text] = first %{#o_v_e_r_l_a_y_AboutLearnText}
            learn_more[:text].evaluate_script "
              this.style.display = 'none';console.log(1);console.log(this.style.display)
            "
            sleep 5
            learn_more[:background_color] = learn_more[:element].style   %{background-color}
            learn_more[:background_color_pre] = learn_more[:background_color][%{background-color}]
            puts learn_more[:background_color] 
            learn_more[:new_element] = learn_more[:element].hover
            # puts learn_more[:new_element].style   %{background-color}
            # puts learn_more[:new_element].matches_style?  %{background-color} => learn_more[:background_color_pre]
            expect(learn_more[:new_element].matches_style?  %{background-color} => learn_more[:background_color_pre]).not_to equal true           
          end          
        end
      end
      # describe "blog page" do
      #   it 'should have a blog article come out on mouseover ' do 
      #     visit '/'
      #     elem = first "#n_a_v_i_g_a_t_i_o_n_blogLink" 
      #     elem.select_option
      #     modernizr = page.evaluate_script %{window.Modernizr.opacity}
      #     csstransitions = page.evaluate_script %{window.Modernizr.csstransitions}
      #     # puts opacity.class 
      #     /element.matches style/          
      #     if  modernizr and csstransitions then
      #       topics = all(%{#b_l_o_g_Topic})
      #       topicButton = all(%{#b_l_o_g_TopicButton})
      #       articleTitle = all(%{#b_l_o_g_ArticleTitle})
      #       topics.each do |a|  
      #         styles = a.style %{width}, %{left},%{opacity}
      #         a.hover
      #         new_styles = a.style %{width}, %{left},%{opacity}
      #         # puts styles
      #         # puts new_styles
      #         expect(styles).not_to equal new_styles
      #       end
      #       topicButton.each do |a|   
      #         styles = a.style  %{left},%{opacity}
      #         a.hover
      #         new_styles = a.style  %{left},%{opacity}
      #         # puts styles
      #         # puts new_styles
      #         expect(styles).not_to equal new_styles
      #       end
      #       articleTitle.each do |a|   
      #         styles = a.style %{font-size}, %{left},%{opacity}
      #         a.hover
      #         new_styles = a.style %{font-size}, %{left},%{opacity}
      #         # puts styles
      #         # puts new_styles
      #         expect(styles).not_to equal new_styles
      #       end                        
      #     end
      #   end
      # end      
                    
    end

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

    # RSpec.feature "visual regression" do
    #   my_widths = [ 668 ,1187 ,1800 ]   
    #   scenario "take a snapshot of the homepage", :js => true do
    #     visit '/'
    #     # Percy.snapshot page, { :name => 'windsor homepage', :widths=> my_widths }
    #     page.current_window.resize_to 668, 800
    #     Percy.snapshot page, { :name => 'windsor homepage phone', :widths => [668] }
        
    #     page.current_window.resize_to 1187, 800
    #     Percy.snapshot page, { :name => 'windsor homepage laptop', :widths => [1187] }

    #     page.current_window.resize_to 1800, 800
    #     Percy.snapshot page, { :name => 'windsor homepage big desktop', :widths => [1800] }            
    #   end
    #   scenario "take a snapshot of the about page",  :js => true do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_aboutLink" 
    #     elem.select_option        
    #     # Percy.snapshot page, { :name => 'windsor about page', :widths=> [668, 1187, 1800] }
    #     page.current_window.resize_to 668, 800
    #     Percy.snapshot page, { :name => 'windsor about page phone', :widths => [668] }
        
    #     page.current_window.resize_to 1187, 800
    #     Percy.snapshot page, { :name => 'windsor about page laptop', :widths => [1187] }

    #     page.current_window.resize_to 1800, 800
    #     Percy.snapshot page, { :name => 'windsor about page big desktop', :widths => [1800] }   
    #   end   
    #   scenario "take a snapshot of the services page", :js => true do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_servicesLink" 
    #     elem.select_option        
    #     # Percy.snapshot page, { :name => 'windsor services page', :widths=> [668, 1187, 1800] }
    #     page.current_window.resize_to 668, 800
    #     Percy.snapshot page, { :name => 'windsor services page phone', :widths => [668] }
        
    #     page.current_window.resize_to 1187, 800
    #     Percy.snapshot page, { :name => 'windsor services page laptop', :widths => [1187] }

    #     page.current_window.resize_to 1800, 800
    #     Percy.snapshot page, { :name => 'windsor services page big desktop', :widths => [1800] }         
    #   end
    #   scenario "take a snapshot of the projects page", :js => true do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_projectsLink" 
    #     elem.select_option
    #     # Percy.snapshot page, { :name => 'windsor projects page', :widths=> [668, 1187, 1800] }
    #     page.current_window.resize_to 668, 800
    #     sleep 30
    #     Percy.snapshot page, { :name => 'windsor projects page phone', :widths => [668] }
        
    #     page.current_window.resize_to 1187, 800
    #     Percy.snapshot page, { :name => 'windsor projects page laptop', :widths => [1187] }

    #     page.current_window.resize_to 1800, 800
    #     Percy.snapshot page, { :name => 'windsor projects page big desktop', :widths => [1800] }       
    #   end
    #   scenario "take a snapshot of the blog page", :js => true do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_blogLink" 
    #     elem.select_option
    #     # Percy.snapshot page, { :name => 'windsor blog page', :widths=> [668, 1187, 1800] }
    #     page.current_window.resize_to 668, 800
    #     sleep 5
    #     Percy.snapshot page, { :name => 'windsor blog page phone', :widths => [668] }
        
    #     page.current_window.resize_to 1187, 800
    #     sleep 5
    #     Percy.snapshot page, { :name => 'windsor blog page laptop', :widths => [1187] }

    #     page.current_window.resize_to 1800, 800
    #     sleep 5
    #     Percy.snapshot page, { :name => 'windsor blog page big desktop', :widths => [1800] }         
    #   end
    #   scenario "take a snapshot of the contact page", :js => true do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_contactLink" 
    #     elem.select_option
    #     # Percy.snapshot page, { :name => 'windsor contact page', :widths=> [668, 1187, 1800] }
    #     page.current_window.resize_to 668, 800
    #     sleep 5
    #     Percy.snapshot page, { :name => 'windsor contact page phone', :widths => [668] }
        
    #     page.current_window.resize_to 1187, 800
    #     Percy.snapshot page, { :name => 'windsor contact page laptop', :widths => [1187] }

    #     page.current_window.resize_to 1800, 800
    #     Percy.snapshot page, { :name => 'windsor contact page big desktop', :widths => [1800] }      
    #   end               
    # end

    
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