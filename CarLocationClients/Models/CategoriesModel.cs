﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CarsLocation.Models
{
    public class CategoriesModel
    {
        [Key]
        public int CategoryID { get; set; }

        public string CategoryName { get; set; }

        public string ImageName { get; set; }

        [NotMapped]
        public IFormFile ImageFile { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }

        public virtual IList<ProductsModel> Products { get; set; }
    }
}
