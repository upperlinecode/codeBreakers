message = "Here is your final code: 125"
message = "google ascii table"
code = []
message.each_byte { |ascii|
  code.push(ascii)
}

print code
