using Microsoft.AspNetCore.Mvc;

namespace CarLocationClients.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult GetProduct()
        {
            return View();
        }
        public IActionResult AddNewProduct()
        {
            return View();
        }
        public IActionResult UpdateProduct()
        {
            return View();
        }
        public IActionResult UpdateDetail()
        {
            return View();
        }
    }
}
