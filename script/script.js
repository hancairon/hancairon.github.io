/*Search Engine Function --------------------------*/
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myBtnContainer");
    li = ul.getElementsByTagName("span");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/*Show all courses -----------------------*/
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
/* Show filtered elements ----------------------*/
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

/*Hide elements that are not selected  ---------------*/
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

function sortListDir() {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("myBtnContainer");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("span");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}




/*Course Brief  ------------------------------------*/
function brief1() {
      document.getElementById("demo").innerHTML = "The essentials of computer software, hardware, and laptop management form the foundation for building further technical programming skills. Learn to configure your laptop environment, basic PC and troubleshoot problems. Create backups, install virus protection, and manage files through a basic understanding of the Windows Operating System. Install and configure the Windows Operating System, and a virtual machine environment. Explore computer organization including basic numerical systems, functional hardware and software components needed to run programs. ";
}

function brief2() {
  document.getElementById("demo").innerHTML = "Students receive an introduction to computer programming with emphasis on problem analysis and design, using algorithms, pseudocode, flowcharts, UML class diagrams and testing, with the Java programming language used as a means to implement problem solution designs. Instruction in the Java programming language is provided including an introduction to object oriented programming, sequential structure, selection structures, repetition structures, variables, constants, methods, constructors, one-dimensional arrays, classes, objects, encapsulation, abstraction, inputs, outputs, coding conventions and documentation. Theory is reinforced with application by means of practical laboratory assessments.";
}

function brief3() {
  document.getElementById("demo").innerHTML = "Students learn the fundamentals of Relational Databases design using Entity Relation diagrams, and use SQL to create, modify and query a database. Students design and create databases that are maintainable, secure and adaptable to change in business requirements, using Normalization. Students are able to compare and appreciate a Database Management System (DBMS) and its components with legacy systems. ";
}

function brief4() {
  document.getElementById("demo").innerHTML = "The study of algebraic and transcendental functions is an essential prerequisite to Calculus. Students manipulate algebraic expressions, solve algebraic equations and linear systems and learn the properties of and graph algebraic and transcendental functions. Students investigate computer number systems in addition to Boolean algebra and logic to help solve problems involving computer systems. Students also study the addition and subtraction of vectors using vector components. Delivered in a modular format, this course is equivalent to the completion of all of the following math modules MAT8100 - A, B, C, D, E, F, H, ";
}

function brief5() {
  document.getElementById("demo").innerHTML = "Students acquire practical experience using market-leading object-relational database management systems like Oracle and MySQL. Students obtain hands-on experience with advanced engineering modeling tools along with SQL, SQL scripts and programming with Oracle's PL/SQL blocks. Database concepts covered include advanced SQL, case structures, rollup and cube operations, metadata manipulation, data storage and retrieval, security and transaction control and data warehousing. Open source database software is also explored.";
}

function brief6() {
  document.getElementById("demo").innerHTML = "Learn the basic concepts and components of Operating Systems (OS), and how they function and interact with hardware and software components. Explore the details of operating system structures, process management, storage management, installation, configuration, and administration both in theory and through practical assignments based on the GNU/Linux operating system. Lab exercises are designed to demonstrate how to implement the theory by developing skills using the powerful GNU/Linux command-line tools and utilities.";
}

function brief7() {
  document.getElementById("demo").innerHTML = "Learn object oriented programming methodology using the Java programming language. Object oriented concepts, such as encapsulation, inheritance, abstraction and polymorphism are covered and reinforced with practical applications.";
}

function brief8() {
  document.getElementById("demo").innerHTML = "Learn the basics of web programming, website design and implementation. JavaScript, HTML5, and PHP are used to explore web-based solutions to problems of increasing interactivity and complexity. Lectures are reinforced by practical assignments that encourage students to construct and maintain their own websites.";
}

function brief9() {
  document.getElementById("demo").innerHTML = "The ability to communicate effectively in a technically-oriented interdisciplinary workplace is a foundational skill in an innovation-driven economy. Students are exposed to exercises and assignments designed to foster independent and collaborative critical thinking, research, writing, visual communication and presentation skills related to technical topics.";
}

function brief10() {
  document.getElementById("demo").innerHTML = "Guided by industry standard software engineering methodologies, students gain hands-on experience with case studies used to develop systems from inception through elaboration, construction and transition phases. Object-oriented design, modeling tools and techniques are used to produce system specifications. Project management principles are also used within team developed projects. Software methodologies discussed include the systems development life cycle (SDLC), agile approach, rational unified process (RUP)and rapid application development (RAD).";
}

function brief11() {
  document.getElementById("demo").innerHTML = "Students explore graphical user interface programming in a mobile Android environment. Students learn how to program applications using the latest Android development tools. Topics include application architecture, interface design, network communication, and database integration.";
}

function brief12() {
  document.getElementById("demo").innerHTML = "Software programming in today's environment requires detailed knowledge of the underlying network topology, its implementation and programming support functions. Gaining an appreciation and perspective of this technology is imperative to developing good network programming applications. Students explore topics including the basic structure, design and layered communications models, with an emphasis on data communications, TCP/IP protocol suite, socket programming and multi-threading concepts. Labs include practical exercises in basic networking and using socket programming, along with multi-threading, in an environment rich with common networking tools for diagnosing and troubleshooting typical network programming problems.";
}

function brief13() {
  document.getElementById("demo").innerHTML = "Implement the best practices of object oriented program development with software design patterns. Apply UML program specifications in the Java programming language. Use embedded SQL through JDBC for developing and using 'data access objects'. Course topics include refactoring, domain modelling, JDBC and multithreaded servlet programming. Students develop proficiency in creating, testing, debugging, deploying and documenting programs and servlets through practical application.";
}

function brief14() {
  document.getElementById("demo").innerHTML = "Business Intelligence (BI) can be broadly defined as a set of applications, infrastructure, and best practices that integrate and transform raw data into actionable information used for planning, monitoring and analyzing processes. The foundation underlying this process is the Data Analytics that explore the data, identify the relationships and patterns in a meaningful way. Students examine the components and best practices of Business Intelligence technology, and how it guides operational to strategic business decisions in the context of real-world applications. Data analytics techniques are used to derive insight using statistical software.";
}

function brief15() {
  document.getElementById("demo").innerHTML = "With a focus on the IT Enterprise, students are introduced to the application enterprise environment using and extending the technologies learned in previous courses. Topics studied may include the Java enterprise environment (JEE), the Microsoft .NET environment, Enterprise Android programming, cloud computing, security and the corporate database repository.";
}

function brief16() {
  document.getElementById("demo").innerHTML = "Learning a new programming language or framework on your own is a challenge faced by programmers on the job as part of their career. Students explore this process of self-study by applying project planning, applied research, testing, and implementation of basic and advanced concepts appropriate to the language or framework under study. Students develop major milestones and deliverables culminating in a project and reflective summary submission.";
}

function brief17() {
  document.getElementById("demo").innerHTML = "Teams and individuals explore advanced database topics: database administration (using Oracle), data governance, globalization, security and advances in database technology. Topic coverage includes business intelligence, data warehouses, data visualization, big data, NoSQL and graph databases. Database administration tasks requiring knowledge of database architecture are examined: relational vs. non-relational models, security, performance, database distribution, database sharing, backup and recovery.";
}

function brief18() {
  document.getElementById("demo").innerHTML = "Following the agile software engineering methodology, teams work with clients to analyze business needs, determine computer system requirements, model system designs, build prototypes, test code and deliver final products. In some cases, the industry contacts are supplied through the Algonquin College office of Applied Research and Innovation. Project management techniques are used to monitor progress and organize tasks. Outside of in-class requirements, teams must participate in interviews, technical reviews, presentations and the preparation of technical reports. The culmination of the course is a final presentation and technical review, followed by the delivery of the finished product.";
}

function brief19() {
  document.getElementById("demo").innerHTML = "Students choose one course, from a group of general education electives, which meets one of the following four requirements: Arts in Society, Civic Life, Social and Cultural Understanding, and Science and Technology";
}

