import { expect, should } from "chai";

let Should = should();

import { Database } from '../app/database';
import { Controller } from '../core/controllers/Controller';
import { TestModel }  from '../core/models/TestModel';

import { UserController } from '../core/controllers/User';

import { CrudTest } from "./crud";
import { CompanyController } from "../core/controllers/Company";
import { ShopController } from "../core/controllers/Shop";

new CrudTest({
  name: "Core Controller",
  controller: new Controller(new TestModel()),
}, {
  email: {
    unique: true,
    email: true
  },
  password: "one2345",
  otherColumn: "hehded"
});

new CrudTest({
  name: "User Controller",
  controller: new UserController()
}, {
  email: {
    unique: true,
    email: true
  },
  password: "one2345",
  firstName: "Michael",
  lastName: "Wilson",
  gender: "Male",
  type: "customer"
});

new CrudTest({
  name: "Company Controller",
  controller: new CompanyController()
}, {
  user_id: 1,
  name: {
    unique: true
  },
  logo: "images/logo.jpg",
  type: "Technology",
  active: true
});

new CrudTest({
  name: "Shops Controller",
  controller: new ShopController()
}, {
  company_id: 1,
  name: {
    unique: true
  },
  logo: "images/logo.jpg",
  type: "Technology",
  addressLine1: "Flat 11, Bedford House",
  addressLine2: "76 Darnley Road",
  city: "Gravesend",
  county: "Kent",
  postcode: "DA110AX",
  bannerImage: "images/banner.jpg",
  active: true
});

/*
describe('Shops', () => {
  describe('Creating a Shop', () => {
    it('should add to the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Reading a Shop', () => {
    it('should have valid properties', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Updating a Shop', () => {
    it('should update the record in the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });
});

describe('Orders', () => {
  describe('Creating an Order', () => {
    it('should add to the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Reading an Order', () => {
    it('should have valid properties', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Updating an Order', () => {
    it('should update the record in the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });
});

describe('Customers', () => {
  describe('Creating a Customer', () => {
    it('should add to the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Reading a Customer', () => {
    it('should have valid properties', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Updating a Customer', () => {
    it('should update the record in the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });
});

describe('Chats', () => {
  describe('Creating a Chat', () => {
    it('should add to the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Reading a Chat', () => {
    it('should have valid properties', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Updating a Chat', () => {
    it('should update the record in the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });
});

describe('Offers', () => {
  describe('Creating an Offer', () => {
    it('should add to the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Reading an Offer', () => {
    it('should have valid properties', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Updating an Offer', () => {
    it('should update the record in the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });
});

describe('Servers', () => {
  describe('Creating a Server', () => {
    it('should add to the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Reading a Server', () => {
    it('should have valid properties', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Updating a Server', () => {
    it('should update the record in the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });
});

describe('Apps', () => {
  describe('Creating an App', () => {
    it('should add to the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Reading an App', () => {
    it('should have valid properties', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Updating an App', () => {
    it('should update the record in the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });
});

describe('Carts', () => {
  describe('Creating a Cart', () => {
    it('should add to the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Reading a Cart', () => {
    it('should have valid properties', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Updating a Cart', () => {
    it('should update the record in the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });
});

describe('Providers', () => {
  describe('Creating a Provider', () => {
    it('should add to the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Reading a Provider', () => {
    it('should have valid properties', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Updating a Provider', () => {
    it('should update the record in the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });
});

describe('Notifications', () => {
  describe('Creating a Notification', () => {
    it('should add to the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Reading a Notification', () => {
    it('should have valid properties', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Updating a Notification', () => {
    it('should update the record in the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });
});

describe('Mail', () => {
  describe('Creating Mail', () => {
    it('should add to the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Reading Mail', () => {
    it('should have valid properties', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });

  describe('Updating Mail', () => {
    it('should update the record in the database', done => {
      done();
    });
    it('Should return a valid JWT token', done => {
      done();
    });
  });
});
  */