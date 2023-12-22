import React from "react"
import Layout from "../layouts/layout"
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
export default function Impressum() {
    return (
        <Layout>
            <main className="bg-indigo-800 text-white rounded-xl p-6 mt-4 mb-4">
                <Typography variant="h1" className="mb-4 sm:text-center pl-6 sm:pl-0">Impressum</Typography>
                <div className="grid gap-1 sm:gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                    <Card className="break-words shadow-none sm:shadow-md">
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="">
                                Angaben gemäß § 5 TMG
                            </Typography>
                            <Typography>
                                Max Mustermann<br></br>
                                Musterladen (Einzelunternehmer)<br></br>
                                Musterstraße 111<br></br>
                                Gebäude 44<br></br>
                                90210 Musterstadt<br></br>
                            </Typography>
                        </CardBody>
                    </Card>

                    <Card className="break-words shadow-none sm:shadow-md">
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="">
                                Kontakt
                            </Typography>
                            <Typography>
                                Telefon: +49(0) 123 44 55 66 <br></br>
                                Telefax: +49(0) 123 44 55 99<br></br>
                                E - Mail: mustermann @musterfirma.de
                            </Typography>
                        </CardBody>
                    </Card>

                    <Card className="break-words shadow-none sm:shadow-md">
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="">
                                Umsatzsteuer - ID
                            </Typography>
                            <Typography>
                                Umsatzsteuer - Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br></br>
                                DE999999999<br></br>
                            </Typography>
                        </CardBody>
                    </Card>

                    <Card className="break-words shadow-none sm:shadow-md">
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="">
                                Redaktionell verantwortlich
                            </Typography>
                            <Typography>
                                Beate Beispielhaft<br></br>
                                Musterstraße 110<br></br>
                                90210 Musterstadt
                            </Typography>
                        </CardBody>
                    </Card>

                    <Card className="break-words shadow-none sm:shadow-md">
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="">
                                EU - Streitschlichtung
                            </Typography>
                            <Typography>
                                Die Europäische Kommission stellt eine Plattform zur Online - Streitbeilegung(OS) bereit: <a className="p-1 text-indigo-800 hover:text-indigo-400" href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>.
                                Unsere E - Mail - Adresse finden Sie oben im Impressum.
                                Verbraucherstreitbeilegung / Universalschlichtungsstelle
                                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </Typography>
                        </CardBody>
                    </Card>

                    <Card className="break-words shadow-none sm:shadow-md">
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="">
                                Verbraucherstreitbeilegung /
                                Universalschlichtungsstelle
                            </Typography>
                            <Typography>
                                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

            </main>
        </Layout >
    );
}


export const Head = () => <title>Impressum</title>


