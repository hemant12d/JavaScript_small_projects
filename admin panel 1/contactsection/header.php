<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <!-- List of Fonts Imported By google fonts -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
    </style>

    <!-- Link Our Own CSS file -->
    <link rel="stylesheet" href="style.css">
    <title>Coctail Academy</title>
</head>

<body>

    <!-- Navigation menu is starting from here -->
    <nav class="navbar navbar-expand-xl navbar-light bgnavmenu pt-3 pb-3t">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="mylogo.jpg" alt="Academy" id="logonav"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 marign-right">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Top Courses
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">CA</a></li>
                            <li><a class="dropdown-item" href="#">UPSE</a></li>
                            <li><a class="dropdown-item" href="#">IIT</a></li>
                            <li><a class="dropdown-item" href="#">IIT</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Type Something..." aria-label="Search">
                    <button class="btn btn-design active" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
<!-- Navigation Menu is ending here -->