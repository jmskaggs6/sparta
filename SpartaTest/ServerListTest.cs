using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Moq;
using NUnit.Framework;
using Sparta.Repositories;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace SpartaTest
{
    public class ServerListTest
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public async Task get_serverliststartup()
        {
            var mockLogger = new Mock<ILogger<ServerListRepo>>();
            var mockConfig = new Mock<IConfiguration>();
            
            var serverlistRepo = new ServerListRepo(mockLogger.Object, mockConfig.Object);
            try
            {
                var serverList = await serverlistRepo.GetServerListStartUp();
                Assert.IsTrue(serverList.Count() > 0);
            }
            catch(Exception ex)
            {
                Assert.Fail(ex.Message);
            }
            Assert.Pass();
        }
    }
}