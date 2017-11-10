require_relative 'daVinciCodeArray.rb'

bookarray = book

message = "It is time for a fortune cookie".split(" ")

codes = []

for word in message
  puts word
  code = bookarray.find_index(word)
  puts code
  codes.push(code)
end

print codes
