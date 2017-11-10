message = "I am a five letter word. I am normally below you. If you remove my first letter, you will find me above you. If you remove my first and second letters, you cannot see me. What am I?"

message = message.split(" ")

codemessage = message.map do |word|
  word.split("").shuffle.join('')
end

print codemessage.join(" ")
