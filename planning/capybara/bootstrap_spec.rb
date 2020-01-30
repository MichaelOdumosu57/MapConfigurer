require 'capybara'
require 'capybara/dsl'
# require 'capybara/selenium'
# require 'capybara/angular'
require 'capybara/rspec'
require 'capybara/rspec/matcher_proxies'
require 'rspec/expectations'
require 'rails_helper'


RSpec::Core::RakeTask.new('test') do |t|
t.rspec_opts = ["-Ilib","--format documentation","--color"]
t.pattern = ['spec/e2e/*.spec.rb']
end