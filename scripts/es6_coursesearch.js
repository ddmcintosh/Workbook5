"use scripts"

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
    ];

    let a1 = whenDoesPROG200CourseStart();
    console.log(a1);

    let a2 = whatIsTitleOfPROJ500CourseStart();
    console.log(a2);

    let a3 = whatarecoursesunder50();
    console.log(a3);


    function whenDoesPROG200CourseStart() {
        let result;
        let thecourse = courses.find(prog200);
        return thecourse.StartDate;
    }

    function whatIsTitleOfPROJ500CourseStart() {
        let result;
        let thecourse = courses.find(proj500);
        return thecourse.Title;
    }

    function whatarecoursesunder50() {
        let result;
        let thecourses = courses.filter(under50);
        return thecourses;
    }

    function prog200(value) {
        let result;
        return (value.CourseId == "PROG200");
    }

    function proj500(value) {
        let result;
        return (value.CourseId == "PROJ500");
    }

    function under50(value) {
        return (Number(value.Fee) <= 50);
    }


   
