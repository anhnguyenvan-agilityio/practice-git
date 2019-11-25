const fastCSV = require("fast-csv");
const fs = require("fs");
const util = require("util");

const loadCSV = () => {
  return new Promise((resolve, reject) => {
    const path = __dirname + "\\csv\\35f3aa98-c07c-4b58-b1e0-cd650c008674.csv";
    const stream = fs.createReadStream(path);
    let result = [];
    fastCSV
      .parseStream(stream, { headers: true })
      .on("error", error => reject(error))
      .on("data", row => result.push(row))
      .on("end", () => resolve(result));
  });
};

(async function() {
  // const result = await loadCSV();
  // let data = {};
  // for (let item of result) {
  //   if (!data[item.userType]) {
  //     data[item.userType] = {};
  //   }
  //   if (
  //     item.yearOfBirth &&
  //     !data[item.userType][`yearOfBirth#${item.yearOfBirth}`]
  //   ) {
  //     data[item.userType][`yearOfBirth#${item.yearOfBirth}`] = [];
  //   }
  //   if (item.location && !data[item.userType][`location#${item.location}`]) {
  //     data[item.userType][`location#${item.location}`] = [];
  //   }
  //   if (item.gender && !data[item.userType][`gender#${item.gender}`]) {
  //     data[item.userType][`gender#${item.gender}`] = [];
  //   }
  //   // Sum total;
  //   if (
  //     item.yearOfBirth &&
  //     data[item.userType][`yearOfBirth#${item.yearOfBirth}`]
  //   )
  //     data[item.userType][`yearOfBirth#${item.yearOfBirth}`].push(item);
  //   if (item.location && data[item.userType][`location#${item.location}`])
  //     data[item.userType][`location#${item.location}`].push(item);
  //   if (item.gender && data[item.userType][`gender#${item.gender}`]) {
  //     data[item.userType][`gender#${item.gender}`].push(item);
  //   }
  // }
  // console.log(util.inspect(data, { showHidden: false, depth: null }));
  const data = {
    "2019-11-11": {
      OFFER_a82b67141a9c92eb: {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        businessId: "BUSINESS_d0326c4c-affb-41e4-9959-0d912d2b020e",
        updatedAt: "2019/11/14"
      },
      "BUSINESS_d0326c4c-affb-41e4-9959-0d912d2b020e": {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        updatedAt: "2019/11/14"
      },
      OFFER_0fc4f924b10fdb45: {
        buyerViewed: 7,
        buyerSaved: 6,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        businessId: "BUSINESS_72e69169-9b66-4c50-bde9-ba8a371efa19",
        updatedAt: "2019/11/14"
      },
      "BUSINESS_72e69169-9b66-4c50-bde9-ba8a371efa19": {
        buyerViewed: 14,
        buyerSaved: 12,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 3,
        totalPayment: 0,
        updatedAt: "2019/11/14"
      },
      "BUYER_ed93abbd-7d69-4508-a4b2-f97e13dc86f6": {
        offersViewed: 7,
        offersSaved: 6,
        offersRedeemed: 0,
        updatedAt: "2019/11/14"
      },
      OFFER_a014a40fa1963b3b: {
        buyerViewed: 7,
        buyerSaved: 6,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 2,
        totalPayment: 0,
        businessId: "BUSINESS_72e69169-9b66-4c50-bde9-ba8a371efa19",
        updatedAt: "2019/11/14"
      },
      "BUYER_19614729-83b3-4491-9520-9c0cf72f1925": {
        offersViewed: 7,
        offersSaved: 6,
        offersRedeemed: 0,
        updatedAt: "2019/11/14"
      }
    },
    "2019-11-12": {
      OFFER_9fdf6e39f76b7442: {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        businessId: "BUSINESS_72e69169-9b66-4c50-bde9-ba8a371efa19",
        updatedAt: "2019/11/14"
      },
      "BUSINESS_72e69169-9b66-4c50-bde9-ba8a371efa19": {
        buyerViewed: 0,
        buyerSaved: 44,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 2,
        totalPayment: 0,
        updatedAt: "2019/11/14"
      },
      "BUYER_6b18f765-41dd-4b9c-aaa1-fbe84a873bc8": {
        offersViewed: 0,
        offersSaved: 0,
        offersRedeemed: 0,
        updatedAt: "2019/11/14"
      },
      OFFER_2279f3339e9fe328: {
        buyerViewed: 0,
        buyerSaved: 44,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        businessId: "BUSINESS_72e69169-9b66-4c50-bde9-ba8a371efa19",
        updatedAt: "2019/11/14"
      },
      "DRUMMER_19614729-83b3-4491-9520-9c0cf72f1925": {
        buyerViewed: 0,
        buyerSaved: 77,
        buyerRedeemed: 0,
        drummerEarning: 0,
        drummerPayouts: 0,
        updatedAt: "2019/11/14"
      },
      OFFER_4eb58133eae80a9e: {
        buyerViewed: 0,
        buyerSaved: 33,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        businessId: "BUSINESS_2f205722-421d-4d18-b5e4-6dd22f4defda",
        updatedAt: "2019/11/14"
      },
      "BUSINESS_2f205722-421d-4d18-b5e4-6dd22f4defda": {
        buyerViewed: 0,
        buyerSaved: 33,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        updatedAt: "2019/11/14"
      }
    },
    "2019-11-13": {
      OFFER_61f334cff5e74e84: {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        businessId: "BUSINESS_8cad006e-69d9-452d-84c0-de57efd80f3c",
        updatedAt: "2019/11/14"
      },
      "BUSINESS_8cad006e-69d9-452d-84c0-de57efd80f3c": {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        updatedAt: "2019/11/14"
      },
      OFFER_c687d6e6b2bcf304: {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        businessId: "BUSINESS_72e69169-9b66-4c50-bde9-ba8a371efa19",
        updatedAt: "2019/11/14"
      },
      "BUSINESS_72e69169-9b66-4c50-bde9-ba8a371efa19": {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        updatedAt: "2019/11/14"
      }
    },
    "2019-11-14": {
      OFFER_155c834294771e23: {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        businessId: "BUSINESS_72e69169-9b66-4c50-bde9-ba8a371efa19",
        updatedAt: "2019/11/14"
      },
      "BUSINESS_72e69169-9b66-4c50-bde9-ba8a371efa19": {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        updatedAt: "2019/11/14"
      },
      OFFER_f8509c65513890a3: {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        businessId: "BUSINESS_67d8b749-67ee-40f9-b35c-4392d4f29149",
        updatedAt: "2019/11/14"
      },
      "BUSINESS_67d8b749-67ee-40f9-b35c-4392d4f29149": {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        updatedAt: "2019/11/14"
      }
    },
    "2019-11-15": {
      OFFER_4eab225534f49871: {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        businessId: "BUSINESS_dea22807-fbaf-4b15-a587-35879668f694",
        updatedAt: "2019/11/14"
      },
      "BUSINESS_dea22807-fbaf-4b15-a587-35879668f694": {
        buyerViewed: 0,
        buyerSaved: 0,
        buyerRedeemed: 0,
        drummerViewed: 0,
        drummerSaved: 1,
        totalPayment: 0,
        updatedAt: "2019/11/14"
      }
    }
  };

  let result = [];
  for (let sk in data) {
    for (let pk in data[sk]) {
      result.push({
        sk,
        pk,
        ...data[sk][pk]
      });
    }
  }
  console.log(result);
})();
