using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Interfaces;
using WebApplication1.Service;

namespace WebApplication1.Controllers
{
    [Route("api/login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private ITeachService _service;

        [HttpPost(Name = "")]
        public string Login(string username, string pass)
        {
            _service = new TeachService();
            return _service.login(username, pass);
        }
    }
}
