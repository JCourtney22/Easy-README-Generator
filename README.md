# README Generator
This project uses the command-line to generate a README using a user's input using the Inquirer package. 

## Challenges

My first challenge was idenitfying how my array of questions needed to be organised so that inquirer could use them properly. I installed inquirer and conducted some research to identify the properties I needed. I ran the command line and found that the list section wasn't working, causing a problem with generating the README. I found that I had not put the properties in the correct order. Once I had fixed this, inquirer was working as required and a README was then generated.

The next problem I had was trying to find out how to print the badges to the top of the generated page. I knew I would need a switch statement that could then be accessed by the generate markdown so that the license the user selected would be matched to the badge. I worked with another student who suggested putting the printLicense function into it's own file may be the solution. After doing this, I was able to recognise that I needed to use require in the generateMardown file to 'grab' the printLicense and place the badge in the right place. The badge was still not printing correctly and the other student helped me recognise that where an import occurs, an export should also occur. I then found that I had simply not exported printLicense after the switch statement and was able to get the badge to work properly. 

## Things I learned

I learnt that a file needs exporting when it needs to be imported elsewhere. I've also found that inquirer is a powerful tool that has the potential to be used in a variety of ways, such as this README Generator. 

I've never used a switch statement before so I have found it interesting learning how this can be used. 

## Video


## License
Please refer to the license in the repo.
