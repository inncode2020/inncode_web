import React from "react";
import _data from "../../data";
import { Link, useHistory } from "react-router-dom";
import Constants from "../../Constants";

const Pricing = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <section id="pricing" className="package-section ptb-100 white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h2> {_data.price.title} </h2>
                <p className="lead"> {_data.price.description} </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {(_data.price.packages || []).map((_package, index) => {
              return (
                <div className="col-lg-4 col-md" key={index}>
                  <div
                    className={
                      "card text-center single-pricing-pack " +
                      (_package.isFeatured ? "primary-bg " : "")
                    }
                  >
                    <div
                      className={
                        "card-header py-5 border-0 pricing-header " +
                        (_package.isFeatured ? "text-web-primary" : "")
                      }
                    >
                      <div className="h1 text-center mb-0">
                        <span className="price font-weight-bolder">
                          {_package.price}
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul
                        className={
                          "list-unstyled text-sm mb-4 pricing-feature-list " +
                          (_package.isFeatured ? "text-web-primary" : "")
                        }
                      >
                        {(_package.features || []).map((feature) => {
                          return <li key={feature.value}> {feature.value} </li>;
                        })}
                      </ul>
                      <button
                        className={
                          "btn mb-3 " +
                          (_package.isFeatured ? "app-store-btn" : "solid-btn")
                        }
                        target="_blank"
                        onClick={() =>
                          history.push({
                            pathname: Constants.Routes.RequestQuotation,
                            state: { index },
                          })
                        }
                      >
                        Purchase now
                      </button>
                      <div className="pricing-body">
                        {_package.priceVariation}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-5 text-center">
            <p className="mb-2">
              If you need custom services or Need more ?
              <Link to="/Contact" className="color-secondary">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Pricing;
