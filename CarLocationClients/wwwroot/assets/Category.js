//$(document).ready(function () {
function AddCategory() {
        try {
            var files = $('#fileUpload')[0].files[0];
            formData = new FormData();
            formData.append('ImageFile', files);
            formData.append('CategoryName', $("#CategoryName").val());
            $.ajax({
                type: "POST",
                data: formData,
                url: url + 'Categories/AddCategories',
                data: formData,
                contentType: false,
                cache: false,
                processData: false,
                dataType: 'JSON',
                success: function (response) {
                    alert("New Category Added")

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
//});
function getCatogrieslist() {
    $.ajax({
        url: url + "Categories/Categorylist",
        type: "GET",
        // data: JSON.stringify(objData),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: getCategores,
        error: function (response) {
            let result = JSON.parse(JSON.stringify(response)); //JSON.stringify();
            alert(result.responseJSON.message);
        }
    });
}
    function getCategores(response) {
        let data = JSON.parse(JSON.stringify(response));
        // $('#categoriestable tr').not(':first').not(':last').remove();
        
        let no = 1;
        $.each(data, function (key, value) {
            var test = '<tr><td>' + no + '</td>' +
                     '<td>' + value.categoryName + '</td>'+
                     '<td> <img src="' + value.imageSrc + '" style="width:40px;height:30px" /></td>'+
                    '<td><input type="button" value="Edit" class="btn btn-success" onClick="editCategory(' + value.categoryID + ')" /></td>'+
                   // '<td><input type="button" value="Detail" class="btn btn-primary" onClick="editCategory(' + value.categoryID + ')" /></td>'+
                    '<td><input type="button" value="Delete" class="btn btn-danger" onClick="deleteCategory(' + value.categoryID + ')" />'+
                    '</td></tr>';
            $("#tbody").append(test);
            no++;
        });
}
function editCategory(id) {
    $.ajax({
        url: url + "Categories/getCategoriesbyid/"+id,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: editCategores,
        error: function (response) {
            let result = JSON.parse(JSON.stringify(response)); //JSON.stringify();
            alert(result.responseJSON.message);
        }
    });
}
function editCategores(response) {
   
    $('#form-modal').modal('show');
    $('#CategoryName').val(response.categoryName);
    $('#CategoryId').val(response.categoryID);
    $('#ImageName').val(response.imageName);
}

function updateCategory() {
    try {
        var files = $('#fileUpload')[0].files[0];
        formData = new FormData();
        formData.append('ImageFile', files);
        formData.append('CategoryName', $("#CategoryName").val());
        formData.append('CategoryId', $("#CategoryId").val());
        formData.append('ImageName', $("#ImageName").val());
        var id = $("#CategoryId").val();

        $.ajax({
            type: "PUT",
            data: formData,
            url: url + 'Categories/updatecategory/'+id,
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            dataType: 'JSON',
            success: function (response) {
                alert("Category Updated Successfully")
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




function detailCategory(id) {

}
function deleteCategory(id) {
    $.ajax({
        url: url + "Categories/deletecategory/" + id,
        type: "Delete",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            alert("Item Deleted Successfully");
            location.reload();
            getCatogrieslist();
        },
        error: function (response) {
            alert("Error some thing wrong");
        }
    });
}