import { CrudTest }          from "./crud";

import { Controller }        from '../core/controllers/Controller';
import { TestModel }         from '../core/models/TestModel';

import { UserController }    from '../core/controllers/User';
import { CompanyController } from "../core/controllers/Company";
import { ShopController }    from "../core/controllers/Shop";
import { CategoryController } from "../core/controllers/Category";
import { ProductController } from "../core/controllers/Product";
import { ProductSizeController } from "../core/controllers/ProductSize";
import { ProductOptionController } from "../core/controllers/ProductOption";

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
  name: "Shop Controller",
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

new CrudTest({
  name: "Category Controller",
  controller: new CategoryController()
}, {
  company_id: 1,
  title: "Drinks",
  subtitle: "All types of drinks",
  description: "Blah blah blah",  
  image: "images/image.jpg",
  name: "Drinks"
}, true);

new CrudTest({
  name: "Product Controller",
  controller: new ProductController()
}, {
  company_id: 1,
  name: "Coca Cola",
  image: "images/image.jpg",
  category: 1,
  description: "Blah blah blah",  
  available: true
}, true);

new CrudTest({
  name: "Product Size Controller",
  controller: new ProductSizeController()
}, {
  product_id: 1,
  name: "Can",
  description: "In a metal can",
  stock: 40,
  price: 1,
  rrp: 2,
  available: true
}, true);

new CrudTest({
  name: "Product Option Controller",
  controller: new ProductOptionController()
}, {
  product_id: 1,
  name: "Straw",
  description: "In a metal can",
  stock: 40,
  price: 0.20,
  rrp: 0.30,
  available: true
}, true);

/*
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