using Microsoft.AspNetCore.Mvc;

namespace CarLocationClients.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Register()
        {
            return View();
        }
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult AddRole()
        {
            return View();
        }
    }
}
