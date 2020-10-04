const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

let manager = [];
let engineer = [];
let intern = [];
let employeeArray = { manager, engineer, intern };

function Prompt() {
    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role.",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'text',
            name: 'employee',
            message: "Please enter the employee's name."
        },
        {
            type: 'text',
            name: 'id',
            message: "Please enter the employee's ID."
        },
        {
            type: 'text',
            name: 'email',
            message: "Please enter the employee's email."
        }])
        .then(({ employee, id, email, role }) => {
            if (role === "Manager") {
                return inquirer
                    .prompt([
                    {
                        type: 'text',
                        name: 'officeNumber',
                        message: "Please enter the Manager's office number."
                    },
                    {
                        type: 'confirm',
                        name: 'nextEmployee',
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({ officeNumber, nextEmployee }) => {
                        manager.push(new Manager(employee, id, email, office))

                        if (nextEmployee) {
                            return Prompt();
                        }
                    })
            } else if (role === 'Engineer') {
                return inquirer
                    .prompt([
                    {
                        type: 'text',
                        name: 'github',
                        message: "What is the Engineer's GitHub username?"
                    },
                    {
                        type: 'confirm',
                        name: 'nextEmployee',
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({ github, nextEmployee }) => {
                        engineer.push(new Engineer(employee, id, email, github))

                        if (nextEmployee) {
                            return Prompt();
                        }
                    })
            } else if (role === 'Intern') {
                return inquirer
                    .prompt([{
                        type: 'text',
                        name: 'school',
                        message: "Please enter the intern's school."
                    },
                    {
                        type: 'confirm',
                        name: 'nextEmployee',
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({ school, nextEmployee }) => {
                        intern.push(new Intern(employee, id, email, school))

                        if (nextEmployee) {
                            return Prompt();
                        }
                    })
            }
        })
};

