$(document).ready(function () {

    $("#register-form").submit(function (e) { ///ajax Regsiter call
        e.preventDefault();
        let objData = {
            "FullName": $("#FullName").val(),
            "Password": $("#Password").val(),
            "Email": $("#Email").val(),
            "Username": $("#Username").val(),
        }; 
        $.ajax({
            url: url + "Auth/register",
            type: "POST",
            data: JSON.stringify(objData),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                alert("New User Created Successfully");
                let result = JSON.parse(JSON.stringify(response));
                if (result.isAuthenticated) {     
                    let email = result.Email;
                    let expiresOn = result.ExpiresOn;
                    let isAuthenticated = result.IsAuthenticated;
                    let roles = result.Roles;
                    let Token = result.Token;
                    let Username = result.Username;
                    localStorage.setItem("token", Token);
                }
                else {
                    alert("error Some thing wrong");
                }
            },
            error: function (response) {
                let result = JSON.parse(JSON.stringify(response)); //JSON.stringify();
                alert(result.responseJSON.message);
            }
        });
    });
    ///loginUser
    $("#login-form").submit(function (e) {///ajax login call
        e.preventDefault();
        let objData = {
            "Password": $("#Password").val(),
            "Email": $("#Email").val(),           
        };
        $.ajax({
            url: url + "Auth/login",
            type: "POST",
            data: JSON.stringify(objData),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                let result = JSON.parse(JSON.stringify(response));
                if (result.isAuthenticated) {
                    console.log(result);
                    alert("User Login Successfully");
                    let email = result.Email;
                    let expiresOn = result.ExpiresOn;
                    let isAuthenticated = result.IsAuthenticated;
                    let roles = result.Roles;
                    let Token = result.Token;
                    let Username = result.Username;
                    localStorage.setItem("token", Token);
                }
                else {
                    alert("error Some thing wrong");
                }
            },
            error: function (response) {
                let result = JSON.parse(JSON.stringify(response)); //JSON.stringify();
                alert(result.responseJSON.message);
            }
        });
    });
    /////
    $("#loginUser").submit(function (e) {///ajax login call
        e.preventDefault();
        let objData = {
            "Password": $("#Password").val(),
            "Email": $("#Email").val(),
        };
        $.ajax({
            url: url + "Auth/login",
            type: "POST",
            data: JSON.stringify(objData),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                let result = JSON.parse(JSON.stringify(response));
                if (result.isAuthenticated) {
                    console.log(result);
                    alert("User Login Successfully");
                    let email = result.Email;
                    let expiresOn = result.ExpiresOn;
                    let isAuthenticated = result.IsAuthenticated;
                    let roles = result.Roles;
                    let Token = result.Token;
                    let Username = result.Username;
                    localStorage.setItem("token", Token);
                }
                else {
                    alert("error Some thing wrong");
                }
            },
            error: function (response) {
                let result = JSON.parse(JSON.stringify(response)); //JSON.stringify();
                alert(result.responseJSON.message);
            }
        });
    });
    ////
    $("#addrole-form").submit(function (e) {///ajax add role call
        e.preventDefault();
        let objData = {
            "userId": $("#UserId").val(),
            "role": $("#Role").val(),
        };
        $.ajax({
            url: url + "Auth/addrole",
            type: "POST",
            data: JSON.stringify(objData),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                alert("Role Assigned Successfully");
            },
            error: function (response) {
                alert(response.responseText);
            }
        });
    });
});////ready function close