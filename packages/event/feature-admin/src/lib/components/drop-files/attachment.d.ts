declare class FileSystemEntry {
  fullPath: string
  isDirectory: boolean
  isFile: boolean
  name: string
}

declare class FileSystemFileEntry extends FileSystemEntry {
  file(onsuccess: (file: File) => void, onerror: (error: Error) => void): void
}

declare class FileSystemDirectoryReader {
  readEntries(onsuccess: (entries: FileSystemEntry[]) => void, onerror: (error: Error) => void): void
}

declare class FileSystemDirectoryEntry extends FileSystemEntry {
  createReader(): FileSystemDirectoryReader
}
