"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Database, Cloud, Upload, File, Folder } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function MyStorage() {
  const [selectedTab, setSelectedTab] = useState<"own" | "rented">("own")
  const [showUploadModal, setShowUploadModal] = useState(false)

  const UploadModal = () => (
    <AnimatePresence>
      {showUploadModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowUploadModal(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-card p-6 rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Upload Files</h2>
            <Input type="file" multiple className="mb-4" />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowUploadModal(false)}>
                Cancel
              </Button>
              <Button>Upload</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8">My Storage</h1>
      <div className="flex space-x-2 mb-6">
        <Button variant={selectedTab === "own" ? "default" : "outline"} onClick={() => setSelectedTab("own")}>
          Own Storage
        </Button>
        <Button variant={selectedTab === "rented" ? "default" : "outline"} onClick={() => setSelectedTab("rented")}>
          Rented Storage
        </Button>
      </div>
      <AnimatePresence mode="wait">
        {selectedTab === "own" ? (
          <motion.div
            key="own"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Own Storage</CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress value={0} className="h-2" />
                  <p className="text-xs text-muted-foreground">No storage data available</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="rented"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rented Storage</CardTitle>
                <Cloud className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Progress value={0} className="h-2 flex-grow mr-4" />
                    <Button onClick={() => setShowUploadModal(true)}>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="flex flex-col items-center p-4 border rounded-lg">
                        {index % 2 === 0 ? (
                          <File className="h-8 w-8 text-primary mb-2" />
                        ) : (
                          <Folder className="h-8 w-8 text-primary mb-2" />
                        )}
                        <span className="text-sm text-center">Empty</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <UploadModal />
    </div>
  )
}

