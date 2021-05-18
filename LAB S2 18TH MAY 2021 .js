<html>
<head>


<script type="text/javascript" src="mio_path_js/jquery.js"></script>
    <script type="text/javascript" src="mio_path_js/jquery.simplePagination.js"></script>
    <link type="text/css" rel="stylesheet" href="mio_path_css/simplePagination.css"/>

    </head>

    <body>

    <table>
    <tbody>
    <tr>
    <th>Id</th>
    <th>Email</th>
    <th>First Name</th>
<th>Last Name</th>
<th>Avatar</th>
</tr>
<tr>
<td>1</td>
<td>george.bluth@reqres.in</td>
<td>George</td>
<td>Bluth</td>
<td>https://reqres.in/img/faces/1-image.jpg</td>
</tr>


<tr>
<td>2</td>
<td>janet.weaver@reqres.in</td>
<td>Janet</td>
<td>Janet</td>
<td>https://reqres.in/img/faces/2-image.jpg</td>
</tr>

<tr>
<td>3</td>
<td>emma.wong@reqres.in</td>
<td>Emma</td>
<td>Wong</td>
<td>https://reqres.in/img/faces/3-image.jpg</td>
</tr>

<tr>
<td>4</td>
<td>eve.holt@reqres.in</td>
<td>Eve</td>
<td>Holt</td>
<td>https://reqres.in/img/faces/4-image.jpg</td>
</tr>

<tr>
<td>5</td>
<td>charles.morris@reqres.in</td>
<td>Charles</td>
<td>Morris</td>
<td>https://reqres.in/img/faces/5-image.jpg</td>
</tr>

<tr>
<td>6</td>
<td>tracey.ramos@reqres.in</td>
<td>Tracey</td>
<td>Ramos/td>
<td>https://reqres.in/img/faces/6-image.jpg</td>
</tr>

<tr>
<td>7</td>
<td>michael.lawson@reqres.in</td>
<td>Michael</td>
<td>Lawson</td>
<td>https://reqres.in/img/faces/7-image.jpg</td>
</tr>

<tr>
<td>8</td>
<td>lindsay.ferguson@reqres.in</td>
<td>Lindsay</td>
<td>Ferguson</td>
<td>https://reqres.in/img/faces/8-image.jpg</td>
</tr>

<tr>
<td>9</td>
<td>tobias.funke@reqres.in</td>
<td>Tobias</td>
<td>Funke</td>
<td>https://reqres.in/img/faces/9-image.jpg</td>
</tr>

<tr>
<td>10</td>
<td>byron.fields@reqres.in</td>
<td>Byron</td>
<td>Fields</td>
<td>https://reqres.in/img/faces/10-image.jpg</td>
</tr>

<tr>
<td>11</td>
<td>george.edwards@reqres.in</td>
<td>George</td>
<td>Edwards</td>
<td>https://reqres.in/img/faces/11-image.jpg</td>
</tr>

<tr>
<td>12</td>
<td>rachel.howell@reqres.in</td>
<td>Rachel</td>
<td>Howell</td>
<td>https://reqres.in/img/faces/12-image.jpg</td>
</tr>
</tbody>
</table>

</tbody>
</table>

</body>

function paginationTable() {

    var items = $("table tbody tr");
    var tablaeBody = $("table tbody");
    var numItems = 12;
    var perPage = 6;


    tablaeBody.html(items.slice(0,20));

    $(".pagination-page").pagination({
        items: numItems,
        itemsOnPage: perPage,


        onPageClick: function(pageNumber) {

            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;

            tablaeBody.html(items.slice(showFrom,showTo));

        }
    });
</html>