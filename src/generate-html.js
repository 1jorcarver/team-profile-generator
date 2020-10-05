const generateTeam = teamData => {

    const manager = teamData.manager.map(function (entry) {
        let managerHtml = `
        <div class="container">
            <div clas="card-deck">
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4">
                        <div class="card border-info mb-4" style="max-width: 18rem;">
                            <div class="card-body">
                                <h4 class="card-title">${entry.name}</h4>
                                <h5 class="card-subtitle mb-2 text-muted">Manager</h5>
                                <h6>ID: ${entry.id}</h6>
                                <p>Email: <a href="mailto:${entry.email}">${entry.email}</a></p>
                                <p>Office Number: ${entry.officeNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        return managerHtml;
    });

    const engineer = teamData.engineer.map(function (entry) {
        let engineerHtml = `
        <div class="container">
            <div clas="card-deck">
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4">
                        <div class="card border-info mb-4" style="max-width: 18rem;">
                            <div class="card-body">
                                <h4 class="card-title">${entry.name}</h4>
                                <h5 class="card-subtitle mb-2 text-muted">Engineer</h5>
                                <h6>ID: ${entry.id}</h6>
                                <p>Email: <a href="mailto:${entry.email}">${entry.email}</a></p>
                                <p>GitHub: <a href="https://github.com/${entry.github}" target="_blank">${entry.github}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        return engineerHtml;
    });

    const intern = teamData.intern.map(function (entry) {
        let internHtml = `
        <div class="container">
            <div clas="card-deck">
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4">
                        <div class="card border-info mb-4" style="max-width: 18rem;">
                            <div class="card-body">
                                <h4>${entry.name}</h4>
                                <h5 class="card-subtitle mb-2 text-muted">Intern</h5>
                                <h6>ID: ${entry.id}</h6>
                                <p>Email: <a href="mailto:${entry.email}">${entry.email}</a></p>
                                <p>School: ${entry.school}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        return internHtml;
    });
    return [manager, engineer, intern]
}

module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width", initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
            <title>The Team of Legends</title>
        </head>
        <body>
            <div class="jumbotron text-center" style="background-color: #e3f2fd;">
                <h2>The Team of Legends</h2>
            </div>
            ${generateTeam(templateData)}
        </body>
        </html>
        `
}