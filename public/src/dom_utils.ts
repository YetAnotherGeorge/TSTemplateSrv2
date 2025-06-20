export function getElementByIdOrThrow<T extends HTMLElement>(idStr: string): T | never {
   let elem: HTMLElement | null = document.getElementById(idStr);
   if (elem == null) throw new Error(`Element with id ${idStr} not found`);
   return <T>elem;
}
export function downloadJson(data: string, fileName: string) {
   let down: string = "data:text;json;charset=utf-8," + encodeURIComponent(data);

   let downloadAnchor: HTMLAnchorElement = document.createElement("a");
   downloadAnchor.style.display = "none";
   downloadAnchor.setAttribute("href", down);
   downloadAnchor.setAttribute("download", fileName);
   downloadAnchor.click();
}
export function downloadBinaryFromBase64(b64Str: string, fileName: string) {
   let down: string = "data:application/octet-steam;base64," + b64Str;

   let downloadAnchor: HTMLAnchorElement = document.createElement("a");
   downloadAnchor.setAttribute("href", down);
   downloadAnchor.setAttribute("download", fileName);
   downloadAnchor.click();
}
