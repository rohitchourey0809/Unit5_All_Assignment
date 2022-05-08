import React from 'react'

export const Apilist = ({users}) => {
  return (
    <>
      <h2>API Documentation</h2>
      <div class="container-fluid mt-5">
        <div className="row text-center">
          {/* <----------SingleCardDiv---------------->   */}

          {users.map((e) => {
            return (
              <div className="col-4 md-4 mt-5 mg-auto">
                <div className="card p-1">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={e.url}
                        className="rounded"
                        width="155"
                        alt="rohit"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 text-left">Rohit</h4>
                      <span className="text-left">{e.title}</span>
                      <div className="P-2 mt-2 bg-primary d-flex justify-content-between rounded text-white">
                        <div className="d-flex flex-column">
                          <span className="Rating">Rating</span>
                          <span className="number1">34</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Followers</span>
                          <span className="number2">44</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="Rating">Rating</span>
                          <span className="number3">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <------------end------------------------> */}
          {/* <----------SingleCardDiv---------------->   */}
          <div className="col-10-md-4 mt-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img src="" className="rounded" width="155" alt="rohit" />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 text-left">login</h4>
                  <span className="text-left">following_url.slice(-20)</span>
                  <div className="P-2 mt-2 bg-primary d-flex justify-content-between rounded text-white">
                    <div className="d-flex flex-column">
                      <span className="Rating">Articles</span>
                      <span className="number1">34</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers">Followers</span>
                      <span className="number2">44</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="Rating">Rating</span>
                      <span className="number3">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <------------end------------------------> */}
          {/* <----------SingleCardDiv---------------->   */}
          <div className="col-10-md-4 mt-5">
            <div className="card p-3">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img src="" className="rounded" width="155" alt="rohit" />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 text-left">login</h4>
                  <span className="text-left">following_url.slice(-20)</span>
                  <div className="P-2 mt-2 bg-primary d-flex justify-content-between rounded text-white">
                    <div className="d-flex flex-column">
                      <span className="Rating">Articles</span>
                      <span className="number1">34</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers">Followers</span>
                      <span className="number2">44</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="Rating">Rating</span>
                      <span className="number3">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <------------end------------------------> */}
          {/* <----------SingleCardDiv---------------->   */}
          <div className="col-10-md-4 mt-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img src="" className="rounded" width="155" alt="rohit" />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 text-left">login</h4>
                  <span className="text-left">following_url.slice(-20)</span>
                  <div className="P-2 mt-2 bg-primary d-flex justify-content-between rounded text-white">
                    <div className="d-flex flex-column">
                      <span className="Rating">Articles</span>
                      <span className="number1">34</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers">Followers</span>
                      <span className="number2">44</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="Rating">Rating</span>
                      <span className="number3">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <------------end------------------------> */}
          {/* <----------SingleCardDiv---------------->   */}
          <div className="col-10-md-4 mt-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img src="" className="rounded" width="155" alt="rohit" />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 text-left">login</h4>
                  <span className="text-left">following_url.slice(-20)</span>
                  <div className="P-2 mt-2 bg-primary d-flex justify-content-between rounded text-white">
                    <div className="d-flex flex-column">
                      <span className="Rating">Articles</span>
                      <span className="number1">34</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers">Followers</span>
                      <span className="number2">44</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="Rating">Rating</span>
                      <span className="number3">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <------------end------------------------> */}
          {/* <----------SingleCardDiv---------------->   */}
          <div className="col-10-md-4 mt-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img src="" className="rounded" width="155" alt="rohit" />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 text-left">login</h4>
                  <span className="text-left">following_url.slice(-20)</span>
                  <div className="P-2 mt-2 bg-primary d-flex justify-content-between rounded text-white">
                    <div className="d-flex flex-column">
                      <span className="Rating">Articles</span>
                      <span className="number1">34</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers">Followers</span>
                      <span className="number2">44</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="Rating">Rating</span>
                      <span className="number3">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <------------end------------------------> */}
        </div>
      </div>
    </>
  );
}
