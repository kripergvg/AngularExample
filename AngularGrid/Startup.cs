using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularGrid.Startup))]
namespace AngularGrid
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
