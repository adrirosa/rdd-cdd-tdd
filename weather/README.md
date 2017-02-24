# cli-weather

The application find the weather of a city input by the user.
The user will input the city, country and the unit(Celsius or Farenheit).


##Packages used

For this project, the packages needed are : 
- meow
- chalk
- update-notifier
- yql
- lodash

Details : \

1\.meow
Used in 'cli.js'
Package to parse input arguments
Define the usage of the variable, set the comportement after the input.

Form : > meow(options,[minimistOptions])

Returns object : with input(array),flags,pkg,help(object)

2\.chalk
Used in 'cli.js'
Package to give style to the output on the terminal.
You can set the color, style(bold, italic,...), background color.

Form : > chalk.<style>[.<style>...](string,[string,...])

3\.update-notifier
Package to send notifications in different platform.

4\.yql
Package to make simple query accross the Web.

5\.lodash
Package with methods to make Javascript easier.
Help to manipulate, test, interate.
