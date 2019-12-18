import * as React from 'react';
import { SFC } from 'react';
import { Col, Row } from 'reactstrap';
import { TeamList } from '../TeamList';

const Team: SFC = () => {
  return (
    <section className="section-team">
      <Row>
        <Col sm={{ size: 12 }} lg={{ size: 6, offset: 3 }}>
          <div className="section-team-inner">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <h3 className="text-grey text-semibold is-size-4">
                YOUR TEAM FOR THIS TEST
              </h3>
              <h4 className="text-right">
                <a
                  className="btn text-primary text-underline-none is-size-6"
                  href=""
                >
                  Team Page <i className="fa fa-users" />
                </a>
              </h4>
            </div>

            <TeamList />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export { Team };
