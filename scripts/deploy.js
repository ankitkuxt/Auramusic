const path = require("path");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const auramusic = await ethers.deployContract("Auramusic");
    const contract_address = await auramusic.getAddress()
    console.log("Contract address:",contract_address)
    saveFrontendFiles(contract_address);

  }

   function saveFrontendFiles(contract_address) {
    const fs = require("fs");
    const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      path.join(contractsDir, "contract-address.json"),
      JSON.stringify({ Auramusic: contract_address }, undefined, 2)
    );
  
    const AuramusicArtifact = artifacts.readArtifactSync("Auramusic");
  
    fs.writeFileSync(
      path.join(contractsDir, "Auramusic.json"),
      JSON.stringify(AuramusicArtifact, null, 2)
    );
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });