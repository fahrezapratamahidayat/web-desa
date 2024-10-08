import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FileText, Users, Briefcase, Home, ChevronRight } from "lucide-react";

export default function LayananDesaSection() {
  const layananDesa = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Administrasi Kependudukan",
      description: "Layanan pembuatan KTP, KK, dan surat keterangan lainnya.",
      badge: "Umum",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Bantuan Sosial",
      description: "Informasi dan pendaftaran program bantuan sosial desa.",
      badge: "Sosial",
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "UMKM & Koperasi",
      description: "Dukungan dan pembinaan untuk UMKM dan koperasi desa.",
      badge: "Ekonomi",
    },
  ];

  return (
    <section id="layanan" className="bg-background py-16 lg:px-32 px-6">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
          Layanan Desa Karyamekar
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Kami menyediakan berbagai layanan untuk memenuhi kebutuhan warga desa.
          Berikut adalah beberapa layanan utama yang dapat kami berikan.
        </p>

        <div className="flex items-center justify-center gap-6 w-full h-full lg:flex-row flex-col ">
          {layananDesa.map((layanan, index) => (
            <Card key={index} className="flex flex-col hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex justify-center">{layanan.icon}</div>
                <CardTitle className="text-xl text-center mb-2">
                  {layanan.title}
                </CardTitle>
                <Badge className="mx-auto ">{layanan.badge}</Badge>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-muted-foreground">{layanan.description}</p>
              </CardContent>
              {/* <div className="p-4 mt-auto">
                <Button variant="outline" className="w-full text-white">
                  Detail Layanan
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div> */}
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button size="lg" className="">
            Lihat Semua Layanan
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
