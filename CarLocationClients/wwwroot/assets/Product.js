//$(document).ready(function () {

function getCatogrieslistDrop() {


    $.ajax({
        url: url + "Categories/Categorylist",
        type: "GET",
        // data: JSON.stringify(objData),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: getCategoresDrop,
        error: function (response) {
            let result = JSON.parse(JSON.stringify(response)); //JSON.stringify();
            alert(result.responseJSON.message);
        }
    });
}
function getCategoresDrop(response) {
    let data = JSON.parse(JSON.stringify(response));
    $.each(data, function (key, value) {
        var option = '<option value="' + value.categoryID + '">' + value.categoryName + '</option>';
        $('#CategoryID').append(option);
    });
}


function AddNewProduct() {
    try {
        var files = $('#fileUpload')[0].files[0];
        formData = new FormData();
        formData.append('ImageFile', files);
        formData.append('ProductName', $("#ProductName").val());
        formData.append('Price', $("#Price").val());
        formData.append('Description', $("#Description").val());
        formData.append('CategoryID', $("#CategoryID").val());
        $.ajax({
            type: "POST",
            data: formData,
            url: url + 'Products/AddNewProduct',
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            dataType: 'JSON',
            success: function(res) {
                alert("New Product Addes");
            },
            error: function (res) {
                alert("Error some thing wrong");
            }
        });
    }
    catch (e) {
        alert(e);
        console.log(e);
    }
}

//});
function getCatogrieslist() {
    $.ajax({
        url: url + "Products/Productlist",
        type: "GET",
        // data: JSON.stringify(objData),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: getProducts,
        error: function (response) {
            let result = JSON.parse(JSON.stringify(response)); //JSON.stringify();
            alert(result.responseJSON.message);
        }
    });
}
function getProducts(response) {
    let data = JSON.parse(JSON.stringify(response));
    console.log(data);
   //  $('#categoriestable tr').not(':first').not(':last').remove();
   
   

    let no = 1;
    $.each(data, function (key, value) {
        var test = '<tr><td>' + no + '</td>' +
            '<td>' + value.productName + '</td>' +
            '<td>' + value.description + '</td>' +
            '<td>' + value.price + '</td>' +
            '<td> <img src="' + value.imageSrc + '" style="width:40px;height:30px" /></td>' +
            '<td><input type="button" value="Edit" class="btn btn-success" onClick="editProducts(' + value.productID + ')" /></td>' +
            // '<td><input type="button" value="Detail" class="btn btn-primary" onClick="editCategory(' + value.categoryID + ')" /></td>'+
            '<td><input type="button" value="Delete" class="btn btn-danger" onClick="deleteProduct(' + value.productID + ')" />' +
            '</td></tr>';
        $("#tbody").append(test);
        no++;
    });

}
function editProducts(id) {
    $.ajax({
        url: url + "Products/getProductbyId/" + id,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: editproduct,
        error: function (response) {
            let result = JSON.parse(JSON.stringify(response)); //JSON.stringify();
            alert(result.responseJSON.message);
        }
    });
}
function editproduct(response) {
    console.log(response);

    $('#form-modal').modal('show');
    $('#ProductName').val(response.productName);
    $('#Price').val(response.price);
    $('#discription').val(response.description);
    $('#productID').val(response.productID);
    $('#ImageName').val(response.imageName);
    getCatogrieslistDrop();
}

function updateProduct() {
    try {
        var files = $('#fileUpload')[0].files[0];
        formData = new FormData();
        formData.append('ImageFile', files);
        formData.append('ProductName', $("#ProductName").val());
        formData.append('Price', $("#Price").val());
        formData.append('Description', $("#discription").val());
        formData.append('CategoryID', $("#CategoryID").val());
        formData.append('productID', $("#productID").val());
        formData.append('ImageName', $("#ImageName").val());
        var id = $("#productID").val();

        $.ajax({
            type: "PUT",
            data: formData,
            url: url + 'Products/updateproducts/' + id,
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            dataType: 'JSON',
            success: function (response) {
                alert("Product Updated Successfully")
                $('#form-modal').modal('hide');
                location.reload();
                getCatogrieslist();

            },
            error: function (response) {
                alert("Error Some thing Wrong!!");
            }
        });
    }
    catch (e) {
        alert(e);
        console.log(e);
    }
}
function deleteProduct(id) {
    $.ajax({
        url: url + "Products/deleteProduct/" + id,
        type: "Delete",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            alert("Item Deleted Successfully");
            location.reload();
            getCatogrieslist()
        },
        error: function (response) {
            alert("Error some thing wrong");
        }
    });
}

function getProductList() {
    $.ajax({
        url: url + "Products/Productlist",
        type: "GET",
        // data: JSON.stringify(objData),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: getProduct,
        error: function (response) {
            let result = JSON.parse(JSON.stringify(response)); //JSON.stringify();
            alert(result.responseJSON.message);
        }
    });
}
function getProduct(response) {
    let data = JSON.parse(JSON.stringify(response));
    console.log(data);
    //  $('#categoriestable tr').not(':first').not(':last').remove();



    let no = 1;
    $.each(data, function (key, value) {
        var test = '<tr><td>' + no + '</td>' +
            '<td>' + value.productName + '</td>' +
            '<td>' + value.description + '</td>' +
            '<td>' + value.price + '</td>' +
            '<td> <img src="' + value.imageSrc + '" style="width:40px;height:30px" /></td>' +
            '<td><input type="button" value="Edit" class="btn btn-success" onClick="editProducts(' + value.productID + ')" /></td>' +
            // '<td><input type="button" value="Detail" class="btn btn-primary" onClick="editCategory(' + value.categoryID + ')" /></td>'+
            '<td><input type="button" value="Delete" class="btn btn-danger" onClick="deleteProduct(' + value.productID + ')" />' +
            '</td></tr>';

     var cars= '<div class="swiper-slide box">' +
            '<img src="' + value.imageSrc + '" alt="">' +
            '<div class="content">' +
            '<h3>'+ value.productName +'</h3>' +
            '<div class="stars">' +
            '<i class="fas fa-star"></i>' +
            '<i class="fas fa-star"></i>' +
            '<i class="fas fa-star"></i>' +
            '<i class="fas fa-star"></i>' +
            '<i class="fas fa-star-half-alt"></i>' +
            '</div>' +
            '<div class="price">$' + value.price + '/-</div>' +
            '<a href="#" class="btn">check out</a>' +
            '</div>' +
            '</div>';

        $("#swiper-wrapper").append(cars);
     
    });

}