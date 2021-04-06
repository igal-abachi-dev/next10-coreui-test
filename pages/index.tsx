import Head from 'next/head';
import {useState} from 'react';


import {
    CLink,
} from '@coreui/nextjs';
import {
    CContainer,
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardHeader,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CNav,
    CNavItem,
    CNavLink,
    CBreadcrumbRouter
} from '@coreui/nextjs';

import styles from '../styles/Home.module.scss';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className={'c-app  c-default-layout'}>

            <CBreadcrumbRouter
                className="border-0 c-subheader-nav m-0 px-0 px-md-3"
            />
            {/* <CSidebar/>*/}

            <div className={'c-wrapper c-fixed-components'}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                {/*<CHeader withSubheader>*/}

                <div className={'c-body'}>
                    <main className={'c-main'}>
                        <CContainer fluid>
                            <div className={'fade-in'}>
                                <CRow>
                                    <CCol xs="6">
                                        <CCard>
                                            <CCardHeader>
                                                Navs
                                                <div className="card-header-actions">
                                                    <CLink
                                                        name="about"
                                                        to={'/about/1/post'}
                                                        rel="noreferrer noopener"
                                                        target="_blank"
                                                        className="card-header-action"
                                                    >
                                                        <small >{'post 1'}</small>
                                                    </CLink>

                                                    <CLink
                                                        name="CNav"
                                                        href={`https://coreui.io/react/docs/components/CNav`}
                                                        rel="noreferrer noopener"
                                                        target="_blank"
                                                        className="card-header-action"
                                                    >
                                                        <small className="text-muted">{'docs'}</small>
                                                    </CLink>
                                                </div>
                                            </CCardHeader>
                                            <CCardBody>
                                                <small>List Based</small>
                                                <CNav>
                                                    <CNavItem>
                                                        <CNavLink active>Active</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink>Link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink disabled>Link</CNavLink>
                                                    </CNavItem>
                                                </CNav>
                                                <hr/>
                                                <small>Link Based</small>
                                                <CNav>
                                                    <CNavLink>Active</CNavLink>
                                                    <CNavLink>Link</CNavLink>
                                                    <CNavLink>Link</CNavLink>
                                                    <CNavLink disabled>Disabled</CNavLink>
                                                </CNav>
                                                <hr/>
                                                <small>Link Base</small>
                                                <CNav className="justify-content-center">
                                                    <CNavLink>Active</CNavLink>
                                                    <CNavLink>Link</CNavLink>
                                                    <CNavLink>Link</CNavLink>
                                                    <CNavLink disabled>Disabled</CNavLink>
                                                </CNav>
                                                <hr/>
                                                <small>Link Based</small>
                                                <CNav className="justify-content-end">
                                                    <CNavLink>Active</CNavLink>
                                                    <CNavLink>Link</CNavLink>
                                                    <CNavLink>Link</CNavLink>
                                                    <CNavLink disabled>Disabled</CNavLink>
                                                </CNav>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                    <CCol xs="3">
                                        <CCard>
                                            <CCardHeader>
                                                Navs
                                                <small> vertical / links</small>
                                            </CCardHeader>
                                            <CCardBody>
                                                <CNav vertical>
                                                    <CNavLink className="nav-item">Active</CNavLink>
                                                    <CNavLink>Link</CNavLink>
                                                    <CNavLink>Link</CNavLink>
                                                    <CNavLink disabled>Disabled</CNavLink>
                                                </CNav>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                    <CCol xs="3">
                                        <CCard>
                                            <CCardHeader>
                                                Navs
                                                <small> vertical / list</small>
                                            </CCardHeader>
                                            <CCardBody>
                                                <CNav vertical>
                                                    <CNavItem>
                                                        <CNavLink>Link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink>Link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink>Another Link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink disabled>Disabled Link</CNavLink>
                                                    </CNavItem>
                                                </CNav>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                </CRow>

                                <CRow>
                                    <CCol xs="6">
                                        <CCard>
                                            <CCardHeader>
                                                Navs
                                                <small> tabs</small>
                                            </CCardHeader>
                                            <CCardBody>
                                                <CNav variant="tabs">
                                                    <CNavLink active>Active</CNavLink>
                                                    <CNavLink>Link</CNavLink>
                                                    <CNavLink>Link</CNavLink>
                                                    <CNavLink disabled>Disabled</CNavLink>
                                                </CNav>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                    <CCol xs="6">
                                        <CCard>
                                            <CCardHeader>
                                                Navs
                                                <small> pills</small>
                                            </CCardHeader>
                                            <CCardBody>
                                                <CNav variant="pills">
                                                    <CNavItem>
                                                        <CNavLink active>Link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink>Link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink>Link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink disabled>Disabled</CNavLink>
                                                    </CNavItem>
                                                </CNav>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="12">
                                        <CCard>
                                            <CCardHeader>
                                                Navs
                                                <small> fill and justify</small>
                                            </CCardHeader>
                                            <CCardBody>
                                                <CNav fill variant="pills">
                                                    <CNavItem>
                                                        <CNavLink active>Active</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink>Longer nav link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink>Link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink disabled>Disabled</CNavLink>
                                                    </CNavItem>
                                                </CNav>

                                                <hr/>

                                                <CNav fill variant="pills">
                                                    <CNavLink active className="nav-item">Active</CNavLink>
                                                    <CNavLink className="nav-item">Link</CNavLink>
                                                    <CNavLink className="nav-item">Link</CNavLink>
                                                    <CNavLink className="nav-item" disabled>Disabled</CNavLink>
                                                </CNav>

                                                <hr/>

                                                <CNav justified variant="pills">
                                                    <CNavItem>
                                                        <CNavLink active>Active</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink>Longer nav link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink>Link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink disabled>Disabled</CNavLink>
                                                    </CNavItem>
                                                </CNav>

                                                <hr/>

                                                <CNav justified variant="pills">
                                                    <CNavLink className="nav-item" active>Active</CNavLink>
                                                    <CNavLink className="nav-item">Link</CNavLink>
                                                    <CNavLink className="nav-item">Link</CNavLink>
                                                    <CNavLink className="nav-item" disabled>Disabled</CNavLink>
                                                </CNav>

                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                </CRow>

                                <CRow>
                                    <CCol xs="12">
                                        <CCard>
                                            <CCardHeader>
                                                Navs
                                                <small> with flex</small>
                                            </CCardHeader>
                                            <CCardBody>
                                                <CNav variant="pills" className="flex-sm-row">
                                                    <CNavLink className="flex-sm-fill text-sm-center"
                                                              active>Active</CNavLink>
                                                    <CNavLink
                                                        className="flex-sm-fill text-sm-center">Link</CNavLink>
                                                    <CNavLink
                                                        className="flex-sm-fill text-sm-center">Link</CNavLink>
                                                    <CNavLink className="flex-sm-fill text-sm-center"
                                                              disabled>Disabled</CNavLink>
                                                </CNav>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                </CRow>

                                <CRow>

                                    <CCol xs="6">
                                        <CCard>
                                            <CCardHeader>
                                                Navs
                                                <small> tabs with dropdowns</small>
                                            </CCardHeader>
                                            <CCardBody>
                                                <CNav variant="tabs">
                                                    <CNavItem>
                                                        <CNavLink active>Link</CNavLink>
                                                    </CNavItem>
                                                    <CDropdown inNav>
                                                        <CDropdownToggle caret>
                                                            Dropdown
                                                        </CDropdownToggle>
                                                        <CDropdownMenu>
                                                            <CDropdownItem>Action</CDropdownItem>
                                                            <CDropdownItem>Another action</CDropdownItem>
                                                            <CDropdownItem>Something else here</CDropdownItem>
                                                            <CDropdownItem divider/>
                                                            <CDropdownItem>Separated link</CDropdownItem>
                                                        </CDropdownMenu>
                                                    </CDropdown>
                                                    <CNavItem>
                                                        <CNavLink>Link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink disabled>Disabled</CNavLink>
                                                    </CNavItem>
                                                </CNav>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>

                                    <CCol xs="6">
                                        <CCard>
                                            <CCardHeader>
                                                Navs
                                                <small> pills with dropdowns</small>
                                            </CCardHeader>
                                            <CCardBody>
                                                <CNav variant="pills">
                                                    <CNavItem>
                                                        <CNavLink active>Link</CNavLink>
                                                    </CNavItem>
                                                    <CDropdown inNav>
                                                        <CDropdownToggle caret>
                                                            Dropdown
                                                        </CDropdownToggle>
                                                        <CDropdownMenu>
                                                            <CDropdownItem>Action</CDropdownItem>
                                                            <CDropdownItem>Another action</CDropdownItem>
                                                            <CDropdownItem>Something else here</CDropdownItem>
                                                            <CDropdownItem divider/>
                                                            <CDropdownItem>Separated link</CDropdownItem>
                                                        </CDropdownMenu>
                                                    </CDropdown>
                                                    <CNavItem>
                                                        <CNavLink>Link</CNavLink>
                                                    </CNavItem>
                                                    <CNavItem>
                                                        <CNavLink disabled>Disabled</CNavLink>
                                                    </CNavItem>
                                                </CNav>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                </CRow>
                            </div>
                        </CContainer>
                    </main>
                </div>
                {/* <CFooter fixed={false}/>*/}
            </div>

        </div>
    );
}
